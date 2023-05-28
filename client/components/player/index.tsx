import { TrackIn } from '@/types/track'

import {  useEffect } from 'react'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useAction } from '@/hooks/useAction'

import styled from '@emotion/styled'

import { Grid, IconButton } from '@mui/material'
import { PlayArrow, Pause, VolumeUp } from '@mui/icons-material'

import { TrackProgress } from '../trackprogress'

let audio: any

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: lightgray;
`

export const Player = ({}) => {
  const { pause, active, volume, duration, currentTime } = useTypedSelector(
    (state) => state.player
  )

  const {
    pauseTrack,
    playTrack,
    setVolume,
    setCurrentTime,
    setDuration,
    setActive,
  } = useAction()

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active.audio
      audio.volume = volume / 100
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration))
      }
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime))
      }
    }
  }

  const play = () => {
    if (pause) {
      playTrack()
      audio.play()
    } else {
      pauseTrack()
      audio.pause()
    }
  }

  useEffect(() => {
    if (!audio) {
      audio = new Audio()
    } else {
      setAudio()
      play()
    }
  }, [active])

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100
    setVolume(Number(e.target.value))
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value)
    setCurrentTime(Number(e.target.value))
  }

  if (!active) {
    return null
  }

  return (
    <Wrapper>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>

      <Grid
        container
        direction='column'
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{active?.name}</div>

        <div style={{ fontSize: 12, color: 'gray' }}>{active?.artist}</div>
      </Grid>

      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
        type='duration'
      />

      <VolumeUp style={{ marginLeft: 'auto' }} />

      <TrackProgress
        left={volume}
        right={100}
        onChange={changeVolume}
        type='volume'
      />
    </Wrapper>
  )
}
