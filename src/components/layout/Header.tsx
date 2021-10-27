import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Image
        src="./logo.png"
        alt="logo"
        htmlHeight="24px"
        htmlWidth="24px"
        mr="3"
      />
      <Heading as="h1" size="md">
        <Link href="/">Bridge Buddy</Link>
      </Heading>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  )
}

export default Header
