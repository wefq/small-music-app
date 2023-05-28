export interface CommentIn {
  _id: string
  username: string
  text: string
}

export interface TrackIn {
  _id: string
  name: string
  artist: string
  text: string
  picture: string
  audio: string
  listens: number
  comments: CommentIn[]
}

export interface TrackStateProperties {
  tracks: TrackIn[]
  status: string
  error: string | null
}