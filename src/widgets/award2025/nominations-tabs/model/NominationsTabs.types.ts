export interface NominationsTabsProps {
  title?: string
  description?: string
  tabs: {
    label: string
    description?: string
    nominations?: NominationCard[]
    subTabs?: {
      label: string
      nominations: NominationCard[]
    }[]
  }[]
  action?: {
    to: string
    text: string
  }
}

export interface NominationCard {
  title?: string
  description?: string
  tag?: string
}
