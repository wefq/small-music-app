import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './reducers/playerSlice'
import trackReducer from './reducers/trackSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      player: playerReducer,
      tracks: trackReducer,
    },
  })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
