export type ActionVariant = 'primary' | 'secondary' | 'ghost' | 'custom'

export interface ActionProps {
  to?: string
  variant?: ActionVariant
  type?: 'button' | 'submit'
  target?: '_self' | '_blank'
  external?: boolean | null
  rel?: string
  ariaLabel?: string
  icon?: string
  preIcon?: string
  postIcon?: string
  iconSize?: string
  disabled?: boolean
}
