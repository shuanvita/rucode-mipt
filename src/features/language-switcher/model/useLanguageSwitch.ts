import type { Locale } from '~/shared/config'

export function useLanguageSwitch() {
  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const options = computed(() =>
    locales.value.map(({ code }) => ({
      code: code as Locale,
      to: switchLocalePath(code),
      isActive: code === locale.value,
    })),
  )

  const available = computed(() => options.value.filter((option) => option.to))
  const isEnabled = computed(() => available.value.length > 1)

  return { options: available, isEnabled }
}
