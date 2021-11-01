import {
  Box,
  Center,
  Icon,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import { BridgeItem } from 'components/BridgeItem'
import { Card } from 'components/Card'
import { ChainPicker } from 'components/ChainPicker'
import React, { useMemo, useState } from 'react'
import { CgArrowDown, CgArrowRight } from 'react-icons/cg'
import { bridges } from '../bridges'
import { Chain, ChainId } from '../chains'

export const NetworkSelect: React.FC = () => {
  const [chainOne, setChainOne] = useState<Chain | undefined>(undefined)
  const [chainTwo, setChainTwo] = useState<Chain | undefined>(undefined)

  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const filteredBridges = useMemo(
    () =>
      bridges.filter(
        (bridge) =>
          (!chainOne || bridge.chains.includes(chainOne?.symbol as ChainId)) &&
          (!chainTwo || bridge.chains.includes(chainTwo?.symbol as ChainId))
      ),
    [chainOne, chainTwo]
  )

  return (
    <>
      <Card>
        <Center py="12">
          <Stack spacing="4" direction={{ base: 'column', md: 'row' }}>
            <Box>
              <Text pl="4" pb="1" fontWeight="bold">
                From
              </Text>
              <ChainPicker selectedChain={chainOne} onSelect={setChainOne} />
            </Box>
            <Box alignSelf={{ base: 'center', md: 'flex-end' }}>
              <Icon
                as={isMobile ? CgArrowDown : CgArrowRight}
                fontSize="1.5em"
                mb={{ base: 0, md: '2' }}
              />
            </Box>
            <Box>
              <Text pl="4" pb="1" fontWeight="bold">
                To
              </Text>
              <ChainPicker selectedChain={chainTwo} onSelect={setChainTwo} />
            </Box>
          </Stack>
        </Center>
      </Card>
      <Text pt="6" pb="2">
        {filteredBridges.length} bridge{filteredBridges.length === 1 ? '' : 's'}
      </Text>
      <VStack w="100%" spacing="4">
        {filteredBridges.map((bridge) => (
          <BridgeItem bridge={bridge} key={bridge.name} />
        ))}
      </VStack>
    </>
  )
}
