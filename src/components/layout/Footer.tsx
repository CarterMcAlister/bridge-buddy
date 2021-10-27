import { Center, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Center as="footer" width="full" align="center">
      <Text>
        Created with ❤️ & ☕️ by{' '}
        <Link href="https://twitter.com/CarterMcAIister" isExternal>
          Carter McAlister
        </Link>
      </Text>
    </Center>
  )
}

export default Footer
