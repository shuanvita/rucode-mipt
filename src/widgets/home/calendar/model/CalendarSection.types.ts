import type { DateRangeProps } from '~/shared/ui/date-range'

export interface CalendarSectionProps {
  title?: string
  tabs: {
    label: string
    cards: CalendarCardProps[]
  }[]
}

export interface CalendarCardProps {
  id: string
  link: string
  date: DateRangeProps
  title?: string
  tags?: {
    id: string
    text: string
    color: string
  }[]
  format: {
    text: string
    color?: string
  }
}
