export interface AiChampCoursesProps {
  title: string
  slides: AiChampCourseCardProps[]
}

export interface AiChampCourseCardProps {
  id: string
  title: string
  description: string[]
  list?: string[]
  action: {
    to: string
    text: string
  }
  active?: boolean
}
