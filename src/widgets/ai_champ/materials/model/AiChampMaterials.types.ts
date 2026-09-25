export interface AiChampMaterialsProps {
  title: string
  imagePerson: string
  namePerson: string
  text: string
  footer: AiChampMaterialsFooterProps
}

export interface AiChampMaterialsFooterProps {
  image: string
  text: string
  action: {
    to: string
    text: string
  }
}
