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
import type { WhyParticipateProps } from '~/widgets/award2026/why-participate'
import type { NominationsTabsProps } from '~/widgets/award2026/nominations-tabs'
import type { AiChampHeroProps } from '~/widgets/ai_champ/hero'
import type { AiChampBenefitsProps } from '~/widgets/ai_champ/benefits'
import type { AiChampLeaguesProps } from '~/widgets/ai_champ/leagues'
import type { AiChampStagesProps } from '~/widgets/ai_champ/stages'
import type { AiChampTasksProps } from '~/widgets/ai_champ/tasks'
import type { AiChampPreparationProps } from '~/widgets/ai_champ/preparation'
import type { AiChampMaterialsProps } from '~/widgets/ai_champ/materials'
import type { AiTestingHeroProps } from '~/widgets/ai_testing/hero'
import type { AiTestingFormatProps } from '~/widgets/ai_testing/format'
import type { AiTestingDatesProps } from '~/widgets/ai_testing/dates'
import type { AiTestingCalendarProps } from '~/widgets/ai_testing/calendar'
import type { AiTestingDemoProps } from '~/widgets/ai_testing/demo'
import type { AiTestingAboutProps } from '~/widgets/ai_testing/about'
import type { WhyParticipateProps as Award2025WhyParticipateProps } from '~/widgets/award2025/why-participate'
import type { NominationsTabsProps as Award2025NominationsTabsProps } from '~/widgets/award2025/nominations-tabs'
import type { AwardCeremonyProps } from '~/widgets/award2025/award-ceremony'
import type { CapitalHeroProps } from '~/widgets/capital-2024/hero'
import type { CapitalAboutProps } from '~/widgets/capital-2024/about'
import type { CapitalProgramProps } from '~/widgets/capital-2024/program'
import type { ChampHeroProps } from '~/widgets/champ/hero'
import type { ChampAboutProps } from '~/widgets/champ/about'
import type { ChampDivisionsProps } from '~/widgets/champ/divisions'
import type { ChampTracksProps } from '~/widgets/champ/tracks'
import type { ChampWhyProps } from '~/widgets/champ/why'
import type { ChampHowProps } from '~/widgets/champ/how'
import type { ChampVenuesProps } from '~/widgets/champ/venues'
import type { ChampGalleryProps } from '~/widgets/champ/gallery'
import type { ChampFaqProps } from '~/widgets/champ/faq'
import type { HeroSectionProps as ConsortiumHeroProps } from '~/widgets/consortium/hero'
import type { FestivalSectionProps } from '~/widgets/consortium/festival'
import type { ParticipantsSectionProps } from '~/widgets/consortium/participants'
import type { StepsSectionProps } from '~/widgets/consortium/steps'
import type { GallerySectionProps } from '~/widgets/consortium/gallery'
import type { BenefitsSectionProps as ConsortiumBenefitsProps } from '~/widgets/consortium/benefits'
import type { FinalHeroProps } from '~/widgets/final-2024/hero'
import type { FinalAboutProps } from '~/widgets/final-2024/about'
import type { FinalVideoProps } from '~/widgets/final-2024/video'
import type { FinalQuotesProps } from '~/widgets/final-2024/quotes'
import type { PrizesSectionProps } from '~/widgets/final-2024/prizes'
import type { FinalProgramProps } from '~/widgets/final-2024/program'
import type { FinalLinksProps } from '~/widgets/final-2024/links'
import type { FinalScheduleProps } from '~/widgets/final-2024/schedule'
import type { FinalGalleryProps } from '~/widgets/final-2024/gallery'
import type { HomeHeroProps } from '~/widgets/home/hero'
import type { CalendarSectionProps } from '~/widgets/home/calendar'
import type { HeroSectionProps as MtsHeroProps } from '~/widgets/mts/hero'
import type { InternshipSectionProps as MtsInternshipProps } from '~/widgets/mts/internship'
import type { ProductsSectionProps as MtsProductsProps } from '~/widgets/mts/products'
import type { BenefitsSectionProps as MwsBenefitsProps } from '~/widgets/mws/benefits'
import type { DirectionsSectionProps as MwsDirectionsProps } from '~/widgets/mws/directions'
import type { HeroSectionProps as MwsHeroProps } from '~/widgets/mws/hero'
import type { InternshipSectionProps as MwsInternshipProps } from '~/widgets/mws/internship'
import type { ProductsSectionProps as MwsProductsProps } from '~/widgets/mws/products'
import type { ResumeSectionProps } from '~/widgets/mws/resume'
import type { StackSectionProps } from '~/widgets/mws/stack'
import type { HeroSectionProps as PractikumHeroProps } from '~/widgets/practikum/hero'
import type { MaterialsSectionProps } from '~/widgets/practikum/materials'
import type { StagesSectionProps as PractikumStagesProps } from '~/widgets/practikum/stages'
import type { CalendarCardProps } from '~/shared/ui/calendar-card'
import type { EventsSliderCardProps, EventsSliderProps } from '~/shared/ui/events-slider'
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
  role: richText().optional(),
  text: richText(),
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
  title: richText().optional(),
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

const award2026WhyParticipate = z.object({
  title: text().optional(),
  // Заголовок карточки выводится через v-html (sanitizeRichText)
  cards: z.array(z.object({ title: richText() })),
}) satisfies ZodType<WhyParticipateProps>

const award2026Nominations = z.object({
  title: text().optional(),
  description: text().optional(),
  tabs: z.array(
    z.object({
      label: text(),
      description: text().optional(),
      nominations: z.array(
        z.discriminatedUnion('type', [
          z.object({
            type: z.literal('simple'),
            title: text(),
            description: z.array(text()),
          }),
          z.object({
            type: z.literal('partner'),
            title: text(),
            description: z.array(text()),
            eligibility: z.array(text()),
            partner: z.object({ name: text(), logo: image(), role: text() }),
          }),
        ]),
      ),
    }),
  ),
  action: z.object({ to: link(), text: text() }).optional(),
}) satisfies ZodType<NominationsTabsProps>

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

const aiChampAction = z.object({ to: link(), text: text() })

const aiChampHero = z.object({
  // Заголовок выводится через v-html (sanitizeRichText)
  title: richText().optional(),
  description: z.array(text()).optional(),
  image: image().optional(),
}) satisfies ZodType<AiChampHeroProps>

const aiChampBenefits = z.object({
  title: text(),
  items: z.array(z.object({ id: text(), image: image(), text: text() })),
  quote: text().optional(),
}) satisfies ZodType<AiChampBenefitsProps>

const aiChampLeagues = z.object({
  title: text().optional(),
  items: z
    .array(
      z.object({
        id: text(),
        title: text(),
        description: z.array(text()).optional(),
        image: image(),
        reverse: z.boolean().optional(),
      }),
    )
    .optional(),
  action: aiChampAction.optional(),
}) satisfies ZodType<AiChampLeaguesProps>

const aiChampStages = z.object({
  title: text().optional(),
  items: z.array(
    z.object({
      id: text(),
      // Абзацы выводятся через v-html (sanitizeRichText)
      description: z.array(richText()).optional(),
      reverse: z.boolean().optional(),
    }),
  ),
}) satisfies ZodType<AiChampStagesProps>

const aiChampTaskCard = z.object({
  id: text(),
  badge: z.object({ text: text(), variant: z.enum(['base', 'pro']) }).optional(),
  title: text().optional(),
  subtitle: text().optional(),
  logo: image().optional(),
  description: text().optional(),
  footer: text().optional(),
})

const aiChampTasks = z.object({
  title: text().optional(),
  description: text().optional(),
  subtitle: text().optional(),
  btnText: text().optional(),
  visibleCards: z.array(aiChampTaskCard).optional(),
  hiddenCards: z.array(aiChampTaskCard).optional(),
  hiddenContent: text().optional(),
  hideText: text().optional(),
  action: aiChampAction.optional(),
}) satisfies ZodType<AiChampTasksProps>

const aiChampPreparation = z.object({
  title: text().optional(),
  subtitle: text().optional(),
  caption: text().optional(),
  slides: z
    .array(z.object({ title: text().optional(), description: z.array(text()).optional() }))
    .optional(),
  action: aiChampAction.optional(),
}) satisfies ZodType<AiChampPreparationProps>

const aiChampMaterials = z.object({
  footer: z.object({ image: image(), text: text(), action: aiChampAction }),
}) satisfies ZodType<AiChampMaterialsProps>

// ───────────── Общие куски ─────────────

const dateRange = z.object({
  from: z.object({ day: z.union([z.number(), text()]), month: text() }),
  to: z.object({ day: z.union([z.number(), text()]), month: text().optional() }).optional(),
})

const calendarCard = z.object({
  id: text(),
  link: link(),
  date: dateRange,
  title: text().optional(),
  tags: z.array(z.object({ id: text(), text: text(), color: text() })).optional(),
  format: z.object({ text: text(), color: text().optional() }),
}) satisfies ZodType<CalendarCardProps>

const eventsSliderCard = z.object({
  id: text(),
  title: text(),
  description: z.array(text()),
  list: z.array(text()).optional(),
  date: dateRange.optional(),
  format: z.object({ text: text(), color: text().optional() }).optional(),
  action: z.object({ to: link(), text: text() }),
  active: z.boolean().optional(),
}) satisfies ZodType<EventsSliderCardProps>

const textLink = z.object({ text: text(), to: link() })
const optionalCta = z.object({ to: link().optional(), text: text().optional() })
const requiredTextCta = z.object({ to: link().optional(), text: text() })

// ───────────── AI Testing (/aitesting) ─────────────

const aiTestingHero = z.object({
  title: richText().optional(),
  description: z.array(text()).optional(),
  image: image().optional(),
  cta: optionalCta.optional(),
}) satisfies ZodType<AiTestingHeroProps>

const aiTestingFormat = z.object({
  title: text(),
  online: z.object({ title: text(), image: image() }),
  offline: z.object({ title: text(), image: image() }),
  text: text(),
}) satisfies ZodType<AiTestingFormatProps>

const aiTestingDates = z.object({
  title: text().optional(),
  cards: z.array(calendarCard).optional(),
}) satisfies ZodType<AiTestingDatesProps>

const aiTestingCalendar = z.object({
  title: text(),
  slides: z.array(eventsSliderCard),
}) satisfies ZodType<AiTestingCalendarProps>

const aiTestingDemo = z.object({
  title: text().optional(),
  image: image().optional(),
  text: text().optional(),
  cards: z.array(z.object({ id: text(), image: image(), text: text().optional() })),
  footerText: text(),
  btnText: text(),
  formEndpoint: link().optional(),
}) satisfies ZodType<AiTestingDemoProps>

const aiTestingAbout = z.object({
  title: richText(),
  description: z.array(richText()),
  cta: z.object({ to: link(), text: text() }),
}) satisfies ZodType<AiTestingAboutProps>

// ───────────── Award 2025 (/award2025) ─────────────

const award2025WhyParticipate = z.object({
  title: text().optional(),
  cards: z.array(z.object({ title: richText() })),
}) satisfies ZodType<Award2025WhyParticipateProps>

const award2025NominationCard = z.object({
  title: text().optional(),
  description: text().optional(),
  tag: text().optional(),
})

const award2025Nominations = z.object({
  title: text().optional(),
  description: richText().optional(),
  tabs: z.array(
    z.object({
      label: text(),
      description: text().optional(),
      nominations: z.array(award2025NominationCard).optional(),
      subTabs: z
        .array(z.object({ label: text(), nominations: z.array(award2025NominationCard) }))
        .optional(),
    }),
  ),
  action: z.object({ to: link(), text: text() }).optional(),
}) satisfies ZodType<Award2025NominationsTabsProps>

const award2025Ceremony = z.object({
  title: text().optional(),
  description: z.array(text()).optional(),
  image: image(),
}) satisfies ZodType<AwardCeremonyProps>

// ───────────── Capital 2024 (/capital-2024) ─────────────

const capitalHero = z.object({
  titleImage: image(),
  titleAlt: text(),
  badge: text(),
  lead: text(),
  description: text(),
  programLink: z.object({ text: text(), href: link() }),
  action: z.object({ text: text() }),
  facts: z.array(z.object({ label: text(), value: text() })),
  image: image(),
  imageAlt: text(),
}) satisfies ZodType<CapitalHeroProps>

const capitalAbout = z.object({
  audienceTitle: text(),
  audience: z.array(z.object({ icon: text(), text: text() })),
  invitation: z.object({ label: text(), hint: richText() }),
  title: text(),
  photos: z.array(image()),
  paragraphs: z.array(richText()),
  logo: z.object({ src: image(), alt: text() }),
}) satisfies ZodType<CapitalAboutProps>

const capitalProgram = z.object({
  title: text(),
  items: z.array(
    z.object({
      time: text(),
      title: text(),
      place: text(),
      video: link().optional(),
      content: richText().optional(),
    }),
  ),
  note: text(),
  action: z.object({ text: text() }),
}) satisfies ZodType<CapitalProgramProps>

// ───────────── Champ (/champ) ─────────────

const champHero = z.object({
  title: text().optional(),
  description: z.array(text()).optional(),
  image: image().optional(),
  imageAlt: text().optional(),
  cta: optionalCta.optional(),
}) satisfies ZodType<ChampHeroProps>

const champAbout = z.object({
  title: text().optional(),
  description: text().optional(),
  cards: z.array(
    z.object({
      id: text(),
      image: image().optional(),
      title: text().optional(),
      text: text().optional(),
    }),
  ),
}) satisfies ZodType<ChampAboutProps>

const champDivisions = z.object({
  title: text(),
  description: text(),
  cards: z.array(z.object({ title: text(), text: text() })),
}) satisfies ZodType<ChampDivisionsProps>

const champTracks = z.object({
  title: text().optional(),
  description: text().optional(),
  cards: z.array(z.object({ image: image(), title: text(), text: text(), color: text() })),
}) satisfies ZodType<ChampTracksProps>

const champWhy = z.object({
  title: text().optional(),
  cards: z.array(
    z.object({
      image: image().optional(),
      title: text().optional(),
      text: text().optional(),
      isActive: z.boolean().optional(),
    }),
  ),
  cta: requiredTextCta.optional(),
}) satisfies ZodType<ChampWhyProps>

const champHow = z.object({
  title: text().optional(),
  stages: z.array(
    z.object({
      title: text(),
      date: text().optional(),
      text: text().optional(),
      list: z.array(text()).optional(),
      note: text().optional(),
      cta: requiredTextCta.optional(),
    }),
  ),
}) satisfies ZodType<ChampHowProps>

const champVenues = z.object({
  title: text().optional(),
  items: z.array(z.object({ title: text(), list: z.array(text()).optional() })),
}) satisfies ZodType<ChampVenuesProps>

const champGallery = z.object({
  title: text().optional(),
  images: z.array(image()),
  cta: textLink.optional(),
}) satisfies ZodType<ChampGalleryProps>

const champFaq = z.object({
  title: text().optional(),
  items: z.array(z.object({ question: text(), answer: richText().optional() })),
  cta: requiredTextCta.optional(),
}) satisfies ZodType<ChampFaqProps>

// ───────────── Consortium (/consortium) ─────────────

const consortiumHero = z.object({
  marquee: text(),
  title: richText(),
  tags: z.array(text()),
  action: z.object({ text: text() }),
  document: textLink,
  image: image(),
}) satisfies ZodType<ConsortiumHeroProps>

const consortiumFestival = z.object({
  title: text(),
  cards: z.array(
    z.object({
      title: text().optional(),
      description: text().optional(),
      icon: text().optional(),
    }),
  ),
}) satisfies ZodType<FestivalSectionProps>

const consortiumParticipants = z.object({
  title: text().optional(),
  subtitle: text().optional(),
  items: z.array(text()),
}) satisfies ZodType<ParticipantsSectionProps>

const consortiumSteps = z.object({
  title: richText(),
  steps: z.array(z.object({ text: richText(), link: textLink.optional() })),
  action: z.object({ text: text() }),
}) satisfies ZodType<StepsSectionProps>

const consortiumGallery = z.object({
  title: text(),
  slides: z.array(
    z.object({ image: image(), title: text().optional(), videoUrl: link().optional() }),
  ),
}) satisfies ZodType<GallerySectionProps>

const consortiumBenefits = z.object({
  title: text().optional(),
  benefits: z.array(text()),
}) satisfies ZodType<ConsortiumBenefitsProps>

// ───────────── Final 2024 (/final-2024) ─────────────

const finalHero = z.object({
  titleImage: image(),
  titleAlt: text(),
  subtitle: text(),
  tags: z.array(text()),
  image: image(),
  imageAlt: text(),
}) satisfies ZodType<FinalHeroProps>

const finalAbout = z.object({
  facts: z.array(z.object({ label: text(), value: text() })),
  audience: z.object({ title: text(), text: text() }),
  action: z.object({ text: text() }),
  title: text(),
  description: text(),
  crystal: image(),
  cat: image(),
}) satisfies ZodType<FinalAboutProps>

const finalVideo = z.object({
  src: link(),
  poster: image().optional(),
}) satisfies ZodType<FinalVideoProps>

const finalQuotes = z.object({
  title: text(),
  items: z.array(z.object({ photo: image(), name: text(), role: text(), text: text() })),
}) satisfies ZodType<FinalQuotesProps>

const finalPrizes = z.object({
  title: text(),
  items: z.array(z.object({ image: image(), title: text() })),
}) satisfies ZodType<PrizesSectionProps>

const finalProgram = z.object({
  title: text(),
  tracks: z.array(
    z.object({
      title: text(),
      rows: z.array(
        z.object({
          date: text(),
          title: text(),
          link: textLink.optional(),
          hint: text().optional(),
        }),
      ),
      action: z.object({ text: text(), to: link().optional() }),
    }),
  ),
}) satisfies ZodType<FinalProgramProps>

const finalLinks = z.object({
  items: z.array(textLink),
}) satisfies ZodType<FinalLinksProps>

const finalSchedule = z.object({
  title: text(),
  day: text(),
  group: z.object({ text: text(), to: link(), note: text() }),
  rows: z.array(z.object({ time: text(), text: text() })),
}) satisfies ZodType<FinalScheduleProps>

const finalGallery = z.object({
  title: text(),
  images: z.array(image()),
}) satisfies ZodType<FinalGalleryProps>

// ───────────── Главная (/) ─────────────

const homeHero = z.object({
  title: text().optional(),
  logo: image().optional(),
  video: link().optional(),
  action: optionalCta.optional(),
}) satisfies ZodType<HomeHeroProps>

const homeCalendar = z.object({
  title: text().optional(),
  tabs: z.array(z.object({ label: text(), cards: z.array(calendarCard) })),
}) satisfies ZodType<CalendarSectionProps>

// ───────────── MTS (/mts) ─────────────

const mtsHero = z.object({
  title: richText(),
  description: richText(),
  image: image(),
}) satisfies ZodType<MtsHeroProps>

const mtsInternship = z.object({
  title: text(),
  description: richText(),
  cards: z.array(z.object({ title: text(), text: text(), image: image() })),
  action: textLink,
}) satisfies ZodType<MtsInternshipProps>

const mtsProducts = z.object({
  title: text(),
  cards: z.array(z.object({ title: richText(), image: image() })),
}) satisfies ZodType<MtsProductsProps>

// ───────────── MWS (/mws) ─────────────

const mwsBenefits = z.object({
  title: text(),
  rows: z.array(
    z.array(
      z.union([
        z.object({ text: richText(), size: z.enum(['sm', 'md', 'lg']).optional() }),
        z.object({ image: image() }),
      ]),
    ),
  ),
}) satisfies ZodType<MwsBenefitsProps>

const participationGroup = z.object({
  legend: text(),
  options: z.array(z.object({ value: text(), label: text() })),
})

const mwsHero = z.object({
  title: richText(),
  action: z.object({ text: text() }),
  subtitle: richText(),
  description: text(),
  image: image(),
  form: z.object({
    description: text(),
    roleGroup: participationGroup,
    eventsGroup: participationGroup,
  }),
}) satisfies ZodType<MwsHeroProps>

const mwsProducts = z.object({
  title: text(),
  cards: z.array(
    z.object({
      title: richText(),
      description: text(),
      tags: z.array(text()),
      image: image(),
    }),
  ),
}) satisfies ZodType<MwsProductsProps>

const mwsStack = z.object({
  title: text(),
  description: text(),
  items: z.array(text()),
}) satisfies ZodType<StackSectionProps>

const mwsInternship = z.object({
  title: text(),
  cards: z.array(z.object({ title: text(), text: richText() })),
}) satisfies ZodType<MwsInternshipProps>

const mwsResume = z.object({
  title: text(),
  description: richText(),
  vacancies: textLink,
  resume: textLink,
}) satisfies ZodType<ResumeSectionProps>

const mwsDirections = z.object({
  title: text(),
  cards: z.array(
    z.object({
      image: image(),
      videoUrl: link(),
      alt: text().optional(),
      caption: text(),
      articleUrl: link(),
      tags: z.array(z.object({ label: text(), color: text().optional() })).optional(),
      aspect: z.enum(['photo', 'video']).optional(),
    }),
  ),
}) satisfies ZodType<MwsDirectionsProps>

// ───────────── Практикум (/practikum) ─────────────

const practikumHero = z.object({
  title: richText(),
  subtitle: text(),
  description: text(),
  audience: z.object({ title: text(), items: z.array(text()) }),
  actions: z.array(textLink),
  image: image(),
}) satisfies ZodType<PractikumHeroProps>

const practikumStages = z.object({
  title: text(),
  steps: z.array(
    z.object({
      title: richText(),
      image: image(),
      note: richText().optional(),
      to: link().optional(),
    }),
  ),
}) satisfies ZodType<PractikumStagesProps>

const practikumMaterials = z.object({
  title: text(),
  emptyText: text(),
  tabs: z.array(
    z.object({
      label: text(),
      items: z.array(
        z.object({
          title: text(),
          description: text(),
          presentationTo: link().optional(),
          allMaterialsTo: link().optional(),
        }),
      ),
    }),
  ),
  action: textLink,
}) satisfies ZodType<MaterialsSectionProps>

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
  'award2026.whyParticipate': award2026WhyParticipate,
  'award2026.nominationsTabs': award2026Nominations,
  'mws.contacts': contacts,
  'consortium.places': places,
  'aiTesting.hero': aiTestingHero,
  'aiTesting.format': aiTestingFormat,
  'aiTesting.calendar': aiTestingDates,
  'aiTesting.championships': aiTestingCalendar,
  'aiTesting.demo': aiTestingDemo,
  'aiTesting.about': aiTestingAbout,
  'award2025.whyParticipate': award2025WhyParticipate,
  'award2025.nominationsTabs': award2025Nominations,
  'award2025.awardCeremony': award2025Ceremony,
  'capital2024.hero': capitalHero,
  'capital2024.about': capitalAbout,
  'capital2024.program': capitalProgram,
  'champ.hero': champHero,
  'champ.about': champAbout,
  'champ.divisions': champDivisions,
  'champ.tracks': champTracks,
  'champ.why': champWhy,
  'champ.how': champHow,
  'champ.venues': champVenues,
  'champ.gallery': champGallery,
  'champ.faq': champFaq,
  'consortium.hero': consortiumHero,
  'consortium.festival': consortiumFestival,
  'consortium.participants': consortiumParticipants,
  'consortium.steps': consortiumSteps,
  'consortium.gallery': consortiumGallery,
  'consortium.benefits': consortiumBenefits,
  'final2024.hero': finalHero,
  'final2024.about': finalAbout,
  'final2024.video': finalVideo,
  'final2024.quotes': finalQuotes,
  'final2024.prizes': finalPrizes,
  'final2024.program': finalProgram,
  'final2024.links': finalLinks,
  'final2024.schedule': finalSchedule,
  'final2024.gallery': finalGallery,
  'home.hero': homeHero,
  'home.calendar': homeCalendar,
  'mts.hero': mtsHero,
  'mts.internship': mtsInternship,
  'mts.products': mtsProducts,
  'mws.benefits': mwsBenefits,
  'mws.hero': mwsHero,
  'mws.products': mwsProducts,
  'mws.stack': mwsStack,
  'mws.internship': mwsInternship,
  'mws.resume': mwsResume,
  'mws.directions': mwsDirections,
  'practikum.hero': practikumHero,
  'practikum.stages': practikumStages,
  'practikum.materials': practikumMaterials,
  'aiChamp.hero': aiChampHero,
  'aiChamp.benefits': aiChampBenefits,
  'aiChamp.leagues': aiChampLeagues,
  'aiChamp.stages': aiChampStages,
  'aiChamp.tasks': aiChampTasks,
  'aiChamp.preparation': aiChampPreparation,
  'aiChamp.materials': aiChampMaterials,
  eventsSlider,
}
