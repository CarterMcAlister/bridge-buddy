import {
  Box,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { Card } from 'components/Card'
import { MotionBox } from 'components/motion/Box'
import React from 'react'
import { Bridge, chains } from '../bridges'

export const BridgeItem = ({ bridge }: { bridge: Bridge }) => (
  <LinkBox w="100%">
    <MotionBox
      as={Card}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.995 }}
      p="4"
      cursor="pointer"
      role="group"
    >
      <HStack>
        <Image
          src={bridge.logo}
          alt={bridge.name}
          borderRadius="full"
          w="70px"
          h="70px"
        />
        <Box pl="2">
          <LinkOverlay href={bridge.url} isExternal>
            <Text as="h3" fontSize="lg">
              {bridge.name}
            </Text>
          </LinkOverlay>
          <Text pt="2" pb="1">
            Supported chains
          </Text>
          <Wrap>
            {bridge.chains.map((chainSymbol) =>
              chains[chainSymbol]?.name ? (
                <WrapItem key={`${bridge.name}-${chainSymbol}`}>
                  <Tag>{chains[chainSymbol].name}</Tag>
                </WrapItem>
              ) : null
            )}
          </Wrap>
        </Box>
      </HStack>
    </MotionBox>
  </LinkBox>
)
