import type { DateRangeProps } from '~/shared/ui/date-range'

export interface EventsSliderProps {
  title: string
  slides: EventsSliderCardProps[]
}

export interface EventsSliderCardProps {
  id: string
  title: string
  description: string[]
  list?: string[]
  date?: DateRangeProps
  format?: {
    text: string
    color?: string
  }
  action: {
    to: string
    text: string
  }
  active?: boolean
}
