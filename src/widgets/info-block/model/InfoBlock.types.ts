export interface InfoBlockProps {
  title?: string
  description: string
  /** Максимальная ширина описания: `md` — 171, `lg` — 180 (единицы Tailwind). */
  descriptionWidth?: 'md' | 'lg'
  isBackground?: boolean
}
