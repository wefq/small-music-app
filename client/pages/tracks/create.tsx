import { Button, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import { StepList } from '@/components/steps'
import { FileUpload } from '@/components/fileupload'
import { useInput } from '@/hooks/useInput'
import axios from 'axios'
import { useRouter } from 'next/router'

const CreateTrack = () => {
  const router = useRouter()

  const [activeStep, setActiveStep] = useState(0)

  const [picture, setPicture] = useState<any>(null)
  const [audio, setAudio] = useState<any>(null)

  const name = useInput('')
  const artist = useInput('')
  const text = useInput('')

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1)
    } else {
      const formData = new FormData()
      formData.append('name', name.value)
      formData.append('artist', artist.value)
      formData.append('text', text.value)
      formData.append('picture', picture)
      formData.append('audio', audio)
      axios
        .post('http://localhost:5000/tracks', formData)
        .then((response) => router.push('/tracks'))
        .catch((error) => console.log(error))
    }
  }

  const back = () => {
    setActiveStep((prev) => prev - 1)
  }

  return (
    <div>
      <StepList activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction='column' style={{ padding: 20 }}>
            <TextField {...name} style={{ marginTop: 10 }} label={'name'} />
            <TextField {...artist} style={{ marginTop: 10 }} label={'artist'} />
            <TextField
              {...text}
              style={{ marginTop: 10 }}
              label={'text'}
              multiline
              rows={3}
            />
          </Grid>
        )}

        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept='image/*'>
            <Button>Load Picture</Button>
          </FileUpload>
        )}

        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept='audio/*'>
            <Button>Load Audio</Button>
          </FileUpload>
        )}
      </StepList>

      <Grid container justifyContent='space-between'>
        <Button onClick={back} disabled={activeStep === 0}>
          Back
        </Button>

        <Button onClick={next}>
          Next
        </Button>
      </Grid>
    </div>
  )
}

export default CreateTrack
