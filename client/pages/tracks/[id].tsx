import type { NextPage, GetServerSideProps } from 'next'
import type { TrackIn } from '@/types/track'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { useInput } from '@/hooks/useInput'

import { Button, Grid, TextField } from '@mui/material'

import axios from 'axios'

interface TrackPageProperties {
  serverTrack: TrackIn
}

const TrackPage: NextPage<TrackPageProperties> = ({ serverTrack }) => {
  const [track, setTrack] = useState<TrackIn>(serverTrack)
  const router = useRouter()

  const userName = useInput('')
  const text = useInput('')

  const addComment = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/tracks/comment',
        {
          username: userName.value,
          text: text.value,
          trackId: track._id,
        }
      )
      setTrack({...track, comments: [...track.comments, response.data]})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Button
        variant='outlined'
        style={{ fontSize: 32 }}
        onClick={() => router.push('/tracks')}
      >
        Back to list
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img
          src={'http://localhost:5000/' + track.picture}
          width={200}
          height={200}
        />
        <div style={{ margin: 30 }}>
          <h1>Name: {track.name}</h1>
          <h1>Artist: {track.artist}</h1>
          <h1>Total Listens: {track.listens}</h1>
        </div>
      </Grid>

      <h1>Text</h1>
      <p>{track.text}</p>

      <h1>Comments</h1>
      <Grid container>
        <TextField {...userName} label='your name' fullWidth />
        <TextField
          {...text}
          label='your comment'
          fullWidth
          multiline
          rows={4}
        />
        <Button onClick={addComment}>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Author: {comment.username}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrackPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params?.id)
  return {
    props: {
      serverTrack: response.data,
    },
  }
}
