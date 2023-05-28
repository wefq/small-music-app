import { TrackIn } from '@/types/track'
import type { FC } from 'react'

import { Box, Button, Card, Grid } from '@mui/material'
import { TrackItem } from './trackItem'

interface TrackListProps {
  tracks: TrackIn[]
}

export const Tracks: FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction='column'>
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid>
  )
}
