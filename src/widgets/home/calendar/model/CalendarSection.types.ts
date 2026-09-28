import type { CalendarCardProps } from '~/shared/ui/calendar-card'

export interface CalendarSectionProps {
  title?: string
  tabs: {
    label: string
    cards: CalendarCardProps[]
  }[]
}
