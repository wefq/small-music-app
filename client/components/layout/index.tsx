import type { FC, ReactNode } from 'react'
import Navbar from '../navbar'
import { Container } from '@mui/material'
import { Player } from '../player'

interface LayoutProperties {
  children: ReactNode
}

export const Layout: FC<LayoutProperties> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Player />
    </>
  )
}
