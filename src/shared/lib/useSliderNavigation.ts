/**
 * Уникальные классы для кнопок навигации Swiper и готовый объект `navigation` для опций слайдера.
 * Классы вешаются на `<UiSliderArrow :nav-class="prevClass" />` и `<UiSliderArrow :nav-class="nextClass" />`.
 */
export function useSliderNavigation() {
  const uniqueId = useId()
  const prevClass = `swiper-navigation-prev-${uniqueId}`
  const nextClass = `swiper-navigation-next-${uniqueId}`

  const navigation = {
    enabled: true,
    prevEl: `.${prevClass}`,
    nextEl: `.${nextClass}`,
  }

  return { prevClass, nextClass, navigation }
}
