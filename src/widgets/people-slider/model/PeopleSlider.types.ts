export interface PeopleSliderProps {
  title: string
  description?: string
  people: Person[]
}

export interface Person {
  photo: string
  name: string
  text: string
}
