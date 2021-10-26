import { Box } from '@chakra-ui/react'
import { NetworkSelect } from 'components/NetworkSelect'
import React from 'react'

const Home = () => {
  return (
    <Box mb={8} w="full">
      <NetworkSelect />
    </Box>
  )
}

export default Home
