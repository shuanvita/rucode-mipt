export interface AiChampMaterialsProps {
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
