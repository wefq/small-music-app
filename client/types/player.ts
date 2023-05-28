import { TrackIn } from './track'

export interface PlayerState {
  active: null | TrackIn
  volume: number
  duration: number
  currentTime: number
  pause: boolean
}
