export interface FinalProgramRow {
  date: string
  title: string
  link?: {
    text: string
    to: string
  }
  hint?: string
}

export interface FinalProgramTrack {
  title: string
  rows: FinalProgramRow[]
  action: {
    text: string
    to?: string
  }
}

export interface FinalProgramProps {
  title: string
  tracks: FinalProgramTrack[]
}
