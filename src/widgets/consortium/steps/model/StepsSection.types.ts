export interface StepsSectionProps {
  title: string
  steps: {
    text: string
    link?: {
      to: string
      text: string
    }
  }[]
  action: {
    text: string
  }
}
