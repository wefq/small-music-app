import type { FC, ReactNode } from 'react'
import {
  Button,
  Card,
  Grid,
  Container,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material'

interface StepListProperties {
  activeStep: number
  children: ReactNode
}

const steps = ['info', 'picture', 'audio']

export const StepList: FC<StepListProperties> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent={'center'}
        style={{ margin: '70px 0', height: 270 }}
      >
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  )
}
