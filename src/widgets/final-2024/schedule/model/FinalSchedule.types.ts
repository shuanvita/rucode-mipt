export interface FinalScheduleProps {
  title: string
  day: string
  group: {
    text: string
    to: string
    note: string
  }
  rows: {
    time: string
    text: string
  }[]
}
