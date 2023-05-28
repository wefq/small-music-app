import { PlayerState } from '@/types/player'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'

const initialState: PlayerState = {
  currentTime: 0,
  duration: 0,
  active: null,
  volume: 50,
  pause: true,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playTrack: (state) => {
      state.pause = false
    },

    pauseTrack: (state) => {
      state.pause = true
    },

    setActive: (state, action) => {
      state.active = action.payload
      state.duration = 0
      state.currentTime = 0
    },

    setDuration: (state, action) => {
      state.duration = action.payload
    },

    setCurrentTime: (state, action) => {
      state.currentTime = action.payload
    },

    setVolume: (state, action) => {
      state.volume = action.payload
    },
  },
})

export const {
  playTrack,
  pauseTrack,
  setActive,
  setDuration,
  setCurrentTime,
  setVolume,
} = playerSlice.actions

export const selectPlayer = (state: RootState) => state.player

export default playerSlice.reducer

