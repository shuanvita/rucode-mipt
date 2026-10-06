export interface ActionSectionProps {
  title: string
  description?: string
  action: {
    text: string
    to: string
    variant?: 'red' | 'red-outline'
  }
}
