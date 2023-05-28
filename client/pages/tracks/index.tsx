import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { Tracks } from '@/components/tracks'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { getTracks } from '@/store/reducers/trackSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'

const TrackList = () => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()

  const { tracks, error } = useTypedSelector((state) => state.tracks)

  useEffect(() => {
    dispatch(getTracks())
  }, [])

  return (
    <Grid container justifyContent='center'>
      <Card style={{ width: 900 }}>
        <Box p={3}>
          <Grid container justifyContent='space-between'>
            <h1>Track list</h1>

            <Button onClick={() => router.push('/tracks/create')}>
              Load track
            </Button>
          </Grid>
        </Box>

        <Tracks tracks={tracks} />
      </Card>
    </Grid>
  )
}

export default TrackList
