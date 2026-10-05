import type { ParticipationOptionGroup } from '~/features/participation-form'

export interface HeroSectionProps {
  title: string
  action: {
    text: string
  }
  subtitle: string
  description: string
  image: string
  form: {
    description: string
    roleGroup: ParticipationOptionGroup
    eventsGroup: ParticipationOptionGroup
  }
}
