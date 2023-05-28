import { TrackIn } from '@/types/track'
import type { FC } from 'react'
import styled from '@emotion/styled'

import { Box, Button, Card, Grid, Icon, IconButton } from '@mui/material'
import { PlayArrow, Pause, Delete } from '@mui/icons-material'

import { useRouter } from 'next/router'
import { useAction } from '@/hooks/useAction'

interface TrackItemProps {
  track: TrackIn
  active?: boolean
}

const StyledCard = styled(Card)`
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
`

export const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter()
  const { playTrack, pauseTrack, setActive } = useAction()

  const play = (e) => {
    e.stopPropagation()
    setActive(track)
    playTrack()
  }

  return (
    <StyledCard onClick={() => router.push(`/tracks/${track._id}`)}>
      <IconButton onClick={play}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>

      <img width={70} height={70} src={'http://localhost:5000/' + track.picture} />

      <Grid
        container
        direction='column'
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{track.name}</div>

        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>

        {active && <div>02:42 / 03:42</div>}
      </Grid>

      <IconButton
        style={{ marginLeft: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Delete />
      </IconButton>
    </StyledCard>
  )
}
