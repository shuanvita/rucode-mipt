import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Marquee from './Marquee.vue'

describe('Marquee', () => {
  let observeSpy: ReturnType<typeof vi.fn>
  let disconnectSpy: ReturnType<typeof vi.fn>

  beforeEach(() => {
    observeSpy = vi.fn()
    disconnectSpy = vi.fn()

    vi.stubGlobal(
      'ResizeObserver',
      vi.fn().mockImplementation(function (callback: ResizeObserverCallback) {
        return {
          observe: observeSpy,
          disconnect: disconnectSpy,
          callback,
        }
      }),
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('рендерит слот и применяет классы по умолчанию (horizontal)', () => {
    const wrapper = mount(Marquee, {
      slots: { default: '<span class="item">Item</span>' },
    })

    const content = wrapper.find('.marquee')
    expect(content.classes()).toContain('marquee-horizontal')
    expect(content.classes()).toContain('flex-row')
    expect(content.classes()).not.toContain('marquee-vertical')
    expect(content.classes()).not.toContain('reverse')
    expect(content.classes()).toContain('gap-8')
  })

  it('применяет вертикальные классы при direction="vertical"', () => {
    const wrapper = mount(Marquee, {
      props: { direction: 'vertical' },
      slots: { default: '<span>Item</span>' },
    })

    const content = wrapper.find('.marquee')
    expect(content.classes()).toContain('marquee-vertical')
    expect(content.classes()).toContain('flex-col')
    expect(content.classes()).not.toContain('marquee-horizontal')
  })

  it('применяет класс reverse при reverse=true', () => {
    const wrapper = mount(Marquee, {
      props: { reverse: true },
      slots: { default: '<span>Item</span>' },
    })

    expect(wrapper.find('.marquee').classes()).toContain('reverse')
  })

  it('прокидывает speed в CSS-переменную --marquee-duration', () => {
    const wrapper = mount(Marquee, {
      props: { speed: 15 },
      slots: { default: '<span>Item</span>' },
    })

    const style = wrapper.find('.marquee').attributes('style')
    expect(style).toContain('--marquee-duration: 15s')
  })

  it('прокидывает произвольный gap-класс', () => {
    const wrapper = mount(Marquee, {
      props: { gap: 'gap-4' },
      slots: { default: '<span>Item</span>' },
    })

    expect(wrapper.find('.marquee').classes()).toContain('gap-4')
    expect(wrapper.find('.marquee').classes()).not.toContain('gap-8')
  })

  it('ставит анимацию на паузу при наведении, если pauseOnHover=true', async () => {
    const wrapper = mount(Marquee, {
      props: { pauseOnHover: true },
      slots: { default: '<span>Item</span>' },
    })

    const container = wrapper.find('.relative')
    const content = () => wrapper.find('.marquee')

    expect(content().attributes('style')).toContain('animation-play-state: running')

    await container.trigger('mouseenter')
    expect(content().attributes('style')).toContain('animation-play-state: paused')

    await container.trigger('mouseleave')
    expect(content().attributes('style')).toContain('animation-play-state: running')
  })

  it('не ставит на паузу при наведении, если pauseOnHover=false', async () => {
    const wrapper = mount(Marquee, {
      props: { pauseOnHover: false },
      slots: { default: '<span>Item</span>' },
    })

    const container = wrapper.find('.relative')

    await container.trigger('mouseenter')
    expect(wrapper.find('.marquee').attributes('style')).toContain('animation-play-state: running')
  })

  it('подписывается на ResizeObserver при монтировании и отписывается при размонтировании', () => {
    const wrapper = mount(Marquee, {
      slots: { default: '<span>Item</span>' },
    })

    expect(observeSpy).toHaveBeenCalledTimes(1)

    wrapper.unmount()
    expect(disconnectSpy).toHaveBeenCalledTimes(1)
  })

  it('увеличивает repeat, когда контента меньше ширины контейнера', async () => {
    const wrapper = mount(Marquee, {
      slots: { default: '<span class="item">Item</span>' },
    })

    const container = wrapper.find('.relative').element as HTMLElement
    const content = wrapper.find('.marquee').element as HTMLElement

    Object.defineProperty(container, 'clientWidth', { value: 1000, configurable: true })
    Object.defineProperty(content, 'scrollWidth', { value: 200, configurable: true })

    const resizeObserverMock = ResizeObserver as unknown as ReturnType<typeof vi.fn>
    const mockResult = resizeObserverMock.mock.results[0]
    expect(mockResult).toBeDefined()

    const { callback } = mockResult!.value as { callback: ResizeObserverCallback }
    callback([], {} as ResizeObserver)

    await wrapper.vm.$nextTick()

    const style = wrapper.find('.marquee').attributes('style')
    expect(style).toContain('--marquee-repeat: 20')
  })
})
