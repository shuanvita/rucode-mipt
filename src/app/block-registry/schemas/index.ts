import { z } from 'zod/v4'
import type { ZodType } from 'zod/v4'
import type { FaqSectionProps } from '~/widgets/faq'
import type { InfoBlockProps } from '~/widgets/info-block'
import type { PartnersSectionProps } from '~/widgets/partners'
import type { PeopleSliderProps } from '~/widgets/people-slider'
import type { PersonQuoteProps } from '~/widgets/person-quote'
import type { PhotoGalleryProps } from '~/widgets/home/photo-gallery'
import type { VideoGalleryProps } from '~/widgets/home/video-gallery'
import type { AchievementsSectionProps } from '~/widgets/home/achievements'
import type { TracksSectionProps } from '~/widgets/home/tracks'
import type { ChampNumbersProps } from '~/widgets/champ/numbers'
import type { ActionSectionProps } from '~/widgets/mts/action-section'
import type { FinalOrganizersProps } from '~/widgets/final-2024/organizers'
import type { FinalTelegramProps } from '~/widgets/final-2024/telegram'
import type { DirectionsWorkProps } from '~/widgets/consortium/directions'
import type { AwardHeroProps } from '~/widgets/award/hero'
import type { AwardParticipantsProps } from '~/widgets/award/participants'
import type { StagesTimelineProps } from '~/widgets/award/stages'
import type { AwardCtaProps } from '~/widgets/award/cta'
import type { ContactsSectionProps } from '~/widgets/mws/contacts'
import type { PlacesSectionProps } from '~/widgets/consortium-section'
import type { EventsSliderProps } from '~/shared/ui/events-slider'
import { image, itemId, link, richText, text } from './fields'

// Схемы привязаны к `*Props` через `satisfies`: при расхождении падает typecheck.
// Здесь только типы виджетов, сами компоненты не импортируются (они грузятся лениво).

const mediaCard = z.object({
  image: image(),
  videoUrl: link().optional(),
  alt: text().optional(),
  caption: text().optional(),
  tags: z.array(z.object({ label: text(), color: text().optional() })).optional(),
  aspect: z.enum(['photo', 'video']).optional(),
})

const faq = z.object({
  title: text().optional(),
  items: z.array(z.object({ id: itemId(), heading: text(), content: richText() })),
}) satisfies ZodType<FaqSectionProps>

const info = z.object({
  title: text().optional(),
  description: richText(),
  descriptionWidth: z.enum(['md', 'lg']).optional(),
  isBackground: z.boolean().optional(),
}) satisfies ZodType<InfoBlockProps>

const partners = z.object({
  items: z.array(
    z.object({
      id: itemId(),
      title: text(),
      titleTone: z.enum(['purple', 'yellow']).optional(),
      text: text().optional(),
      images: z.array(
        z.object({ id: itemId(), src: image(), alt: text(), class: text().optional() }),
      ),
    }),
  ),
}) satisfies ZodType<PartnersSectionProps>

const personQuote = z.object({
  title: text().optional(),
  image: image(),
  name: text(),
  role: text().optional(),
  text: text(),
}) satisfies ZodType<PersonQuoteProps>

const peopleSlider = z.object({
  title: text(),
  description: text().optional(),
  people: z.array(z.object({ id: itemId(), photo: image(), name: text(), text: text() })),
}) satisfies ZodType<PeopleSliderProps>

const photoGallery = z.object({
  title: text(),
  photos: z.array(mediaCard),
}) satisfies ZodType<PhotoGalleryProps>

const videoGallery = z.object({
  title: text().optional(),
  items: z.array(mediaCard),
}) satisfies ZodType<VideoGalleryProps>

const achievements = z.object({
  title: text(),
  titleColor: z.enum(['purple', 'purple-light', 'yellow', 'white']).optional(),
  titleAlign: z.enum(['left', 'center', 'right']).optional(),
  cardShadow: z.boolean().optional(),
  cards: z.array(
    z.object({ id: text(), image: image(), text: text(), shadow: z.boolean().optional() }),
  ),
}) satisfies ZodType<AchievementsSectionProps>

const tracks = z.object({
  title: text().optional(),
  cards: z.array(
    z.object({
      id: text(),
      image: image().optional(),
      tag: text().optional(),
      tagColor: z.enum(['blue', 'emerald', 'amber', 'rose']).optional(),
      text: text().optional(),
      links: z.array(z.object({ id: text(), text: text(), to: link() })).optional(),
    }),
  ),
}) satisfies ZodType<TracksSectionProps>

const champNumbers = z.object({
  title: text().optional(),
  items: z
    .array(
      z.object({
        id: itemId(),
        title: text().optional(),
        text: text().optional(),
        image: image().optional(),
      }),
    )
    .length(4),
}) satisfies ZodType<ChampNumbersProps>

const actionSection = z.object({
  title: text(),
  description: text().optional(),
  action: z.object({
    text: text(),
    to: link(),
    variant: z.enum(['red', 'red-outline']).optional(),
  }),
}) satisfies ZodType<ActionSectionProps>

const organizers = z.object({
  title: text(),
  items: z.array(z.object({ id: itemId(), name: text(), city: text(), logo: image(), to: link() })),
}) satisfies ZodType<FinalOrganizersProps>

const telegram = z.object({
  text: text(),
  action: z.object({ text: text(), to: link() }),
  image: image(),
  imageAlt: text(),
}) satisfies ZodType<FinalTelegramProps>

const directionsWork = z.object({
  title: text().optional(),
  cards: z.array(
    z.object({
      id: itemId(),
      icon: text(),
      title: text().optional(),
      description: text().optional(),
    }),
  ),
}) satisfies ZodType<DirectionsWorkProps>

const awardAction = z.object({ to: link().optional(), text: text().optional() })

const awardHero = z.object({
  title: text().optional(),
  action: awardAction.optional(),
  image: image().optional(),
  imageMobile: image().optional(),
}) satisfies ZodType<AwardHeroProps>

const awardParticipants = z.object({
  title: text().optional(),
  cards: z.array(text()),
}) satisfies ZodType<AwardParticipantsProps>

const awardStages = z.object({
  title: text().optional(),
  stages: z.array(
    z.object({
      id: itemId(),
      number: z.number().optional(),
      title: text().optional(),
      description: richText().optional(),
      variant: z.enum(['active', 'secret']).optional(),
      span: z.enum(['full', 'double']).optional(),
    }),
  ),
}) satisfies ZodType<StagesTimelineProps>

const awardCta = z.object({
  title: text().optional(),
  action: awardAction.optional(),
}) satisfies ZodType<AwardCtaProps>

const contacts = z.object({
  title: text(),
  cards: z.array(
    z.object({ id: itemId(), title: text(), description: text(), to: link(), image: image() }),
  ),
}) satisfies ZodType<ContactsSectionProps>

const places = z.object({
  title: text(),
  description: text().optional(),
  action: z.object({ text: text(), to: link() }).optional(),
}) satisfies ZodType<PlacesSectionProps>

const eventsSlider = z.object({
  title: text(),
  slides: z.array(
    z.object({
      id: text(),
      title: text(),
      description: z.array(text()),
      list: z.array(text()).optional(),
      date: z
        .object({
          from: z.object({ day: z.union([z.number(), text()]), month: text() }),
          to: z.object({ day: z.union([z.number(), text()]), month: text().optional() }).optional(),
        })
        .optional(),
      format: z.object({ text: text(), color: text().optional() }).optional(),
      action: z.object({ to: link(), text: text() }),
      active: z.boolean().optional(),
    }),
  ),
}) satisfies ZodType<EventsSliderProps>

/** type блока -> схема `data`. Блоки без схемы попадают в манифест как `readonly`. */
export const blockSchemas: Record<string, ZodType> = {
  faq,
  info,
  partners,
  personQuote,
  peopleSlider,
  photoGallery,
  videoGallery,
  achievements,
  'home.tracks': tracks,
  'champ.numbers': champNumbers,
  actionSection,
  organizers,
  telegram,
  directionsWork,
  'award.hero': awardHero,
  'award.participants': awardParticipants,
  'award.stagesTimeline': awardStages,
  'award.cta': awardCta,
  'mws.contacts': contacts,
  'consortium.places': places,
  eventsSlider,
}
