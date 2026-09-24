export function useScrollReveal(options?: { threshold?: number; rootMargin?: string }) {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  const { stop } = useIntersectionObserver(
    target,
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        stop()
      }
    },
    {
      threshold: options?.threshold ?? 0.2,
      rootMargin: options?.rootMargin ?? '0px 0px -10% 0px',
    },
  )

  return { target, isVisible }
}
