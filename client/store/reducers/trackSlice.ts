import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'
import {  TrackStateProperties } from '@/types/track'

const initialState: TrackStateProperties = {
  tracks: [],
  status: 'idle',
  error: null,
}

export const getTracks = createAsyncThunk('tracks/getTracks', async () => {
  const response = await fetch('http://localhost:5000/tracks')
  const data = await response.json()
  return data
})

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTracks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getTracks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.tracks = action.payload
      })
      .addCase(getTracks.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const selectTracks = (state: RootState) => state.tracks.tracks

export default tracksSlice.reducer
