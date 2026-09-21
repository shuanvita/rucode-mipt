export interface DateRangeProps {
  from: {
    day: number | string
    month: string
  }
  to?: {
    day: number | string
    month?: string
  }
}
