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
  items: MaterialsItem[]
}

export interface MaterialsItem {
  title: string
  description: string
  presentationTo?: string
  allMaterialsTo?: string
}
