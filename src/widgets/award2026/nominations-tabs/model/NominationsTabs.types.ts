export interface NominationsTabsProps {
  title?: string
  description?: string
  tabs: {
    label: string
    description?: string
    nominations: (SimpleNominationCard | PartnerNominationCard)[]
  }[]
  action?: {
    to: string
    text: string
  }
}

export interface SimpleNominationCard {
  type: 'simple'
  title: string
  description: string[]
}

export interface PartnerNominationCard {
  type: 'partner'
  title: string
  description: string[]
  eligibility: string[]
  partner: {
    name: string
    logo: string
    role: string
  }
}
