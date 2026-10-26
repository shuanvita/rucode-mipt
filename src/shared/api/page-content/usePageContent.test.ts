import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { mountSuspended, registerEndpoint } from '@nuxt/test-utils/runtime'

import { fetchCmsPage, usePageContent } from './usePageContent'
import type { ContentPage, PageContentFallback } from './usePageContent.types'

const page = (slug: string): ContentPage => ({ slug, version: 1, blocks: [] })

// useAsyncData кэширует данные по ключу — в каждом тесте нужен свой slug
let counter = 0

function mountProbe(
  fallback: PageContentFallback,
  { withCms = false, cmsResponse }: { withCms?: boolean; cmsResponse?: unknown } = {},
) {
  const slug = `/probe/${counter++}`
  if (withCms) registerEndpoint(`/api/cms${slug}`, () => cmsResponse ?? page('cms'))

  return mountSuspended(
    defineComponent({
      async setup() {
        const { data } = await usePageContent(slug, fallback)
        return () => h('div', data.value?.page.slug)
      },
    }),
  )
}

describe('usePageContent', () => {
  afterEach(async () => {
    await useNuxtApp().$i18n.setLocale('ru')
  })

  it('для языка по умолчанию берёт ответ CMS', async () => {
    const wrapper = await mountProbe(
      { ru: page('ru-fallback'), en: page('en-fallback') },
      { withCms: true },
    )
    expect(wrapper.text()).toBe('cms')
  })

  it('для английского берёт локальный перевод, а не ответ CMS', async () => {
    await useNuxtApp().$i18n.setLocale('en')
    const wrapper = await mountProbe(
      { ru: page('ru-fallback'), en: page('en-fallback') },
      { withCms: true },
    )
    expect(wrapper.text()).toBe('en-fallback')
  })

  it('поддерживает ленивый лоадер перевода', async () => {
    await useNuxtApp().$i18n.setLocale('en')
    const wrapper = await mountProbe({
      ru: page('ru-fallback'),
      en: () => Promise.resolve(page('en-lazy')),
    })
    expect(wrapper.text()).toBe('en-lazy')
  })

  it('без перевода и при ошибке CMS откатывается на русский фолбэк', async () => {
    await useNuxtApp().$i18n.setLocale('en')
    const wrapper = await mountProbe({ ru: page('ru-fallback') })
    expect(wrapper.text()).toBe('ru-fallback')
  })

  it('невалидный ответ CMS игнорирует и берёт локальные данные', async () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    const wrapper = await mountProbe(page('local'), {
      withCms: true,
      cmsResponse: { slug: 'broken', blocks: 'oops' },
    })
    expect(wrapper.text()).toBe('local')
    error.mockRestore()
  })

  it('принимает одиночный ContentPage как русский фолбэк', async () => {
    const wrapper = await mountProbe(page('single'))
    expect(wrapper.text()).toBe('single')
  })

  it('перезагружает контент при смене языка', async () => {
    const wrapper = await mountProbe(
      { ru: page('ru-fallback'), en: page('en-fallback') },
      { withCms: true },
    )
    expect(wrapper.text()).toBe('cms')

    await useNuxtApp().$i18n.setLocale('en')
    await flushPromises()
    expect(wrapper.text()).toBe('en-fallback')
  })
})

describe('fetchCmsPage', () => {
  // fetchCmsPage использует useNuxtApp(), поэтому вызываем его из setup компонента
  function callTwice(slug: string) {
    let results: ContentPage[] = []
    return mountSuspended(
      defineComponent({
        async setup() {
          results = await Promise.all([fetchCmsPage(slug), fetchCmsPage(slug)])
          return () => h('div', results.map((item) => item.slug).join(','))
        },
      }),
    )
  }

  it('делит один запрос между middleware и страницей', async () => {
    const slug = `/probe/shared-${counter++}`
    const handler = vi.fn(() => page('cms'))
    registerEndpoint(`/api/cms${slug}`, handler)

    const wrapper = await callTwice(slug)

    expect(wrapper.text()).toBe('cms,cms')
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('не запоминает ошибку: следующий вызов повторяет запрос', async () => {
    const slug = `/probe/failed-${counter++}`
    const handler = vi.fn(() => {
      // 404: ofetch не повторяет его сам (в отличие от 500), так что считаются только наши вызовы
      throw createError({ statusCode: 404 })
    })
    registerEndpoint(`/api/cms${slug}`, handler)

    const attempt = () =>
      mountSuspended(
        defineComponent({
          async setup() {
            const failed = await fetchCmsPage(slug).then(
              () => false,
              () => true,
            )
            return () => h('div', String(failed))
          },
        }),
      )

    expect((await attempt()).text()).toBe('true')
    expect((await attempt()).text()).toBe('true')
    expect(handler).toHaveBeenCalledTimes(2)
  })
})
