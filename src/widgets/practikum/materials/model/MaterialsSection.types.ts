export interface MaterialsSectionProps {
  title: string
  emptyText: string
  tabs: MaterialsTab[]
  action: {
    text: string
    to: string
  }
}

export interface MaterialsTab {
  label: string
  items: {
    title: string
    content: string
  }[]
}
