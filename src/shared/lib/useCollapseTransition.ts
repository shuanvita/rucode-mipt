export function useCollapseTransition() {
  function onEnter(el: Element) {
    const element = el as HTMLElement
    element.style.height = '0'
    element.style.overflow = 'hidden'
    requestAnimationFrame(() => {
      element.style.transition = 'height 0.4s ease-out'
      element.style.height = `${element.scrollHeight}px`
    })
  }

  function onAfterEnter(el: Element) {
    const element = el as HTMLElement
    element.style.height = ''
    element.style.overflow = ''
    element.style.transition = ''
  }

  function onLeave(el: Element) {
    const element = el as HTMLElement
    element.style.height = `${element.scrollHeight}px`
    element.style.overflow = 'hidden'
    requestAnimationFrame(() => {
      element.style.transition = 'height 0.4s ease-out'
      element.style.height = '0'
    })
  }

  return { onEnter, onAfterEnter, onLeave }
}
