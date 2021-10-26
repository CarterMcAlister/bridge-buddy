import { Center, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import { BridgeItem } from 'components/BridgeItem'
import { Card } from 'components/Card'
import { ChainPicker } from 'components/ChainPicker'
import React, { useMemo, useState } from 'react'
import { CgArrowRight } from 'react-icons/cg'
import { bridges, Chain, ChainId } from '../bridges'

export const NetworkSelect: React.FC = () => {
  const [chainOne, setChainOne] = useState<Chain | undefined>(undefined)
  const [chainTwo, setChainTwo] = useState<Chain | undefined>(undefined)

  const swapSelections = () => {
    setChainOne(chainTwo)
    setChainTwo(chainOne)
  }

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
          <HStack spacing={4}>
            <Text>From</Text>
            <ChainPicker selectedChain={chainOne} onSelect={setChainOne} />
            <IconButton
              aria-label="Swap"
              icon={<CgArrowRight />}
              onClick={swapSelections}
              variant="unstyled"
              fontSize="1.5em"
            />

            <Text>To</Text>
            <ChainPicker selectedChain={chainTwo} onSelect={setChainTwo} />
          </HStack>
        </Center>
      </Card>
      <Text pt="6" pb="2">
        {filteredBridges.length} bridge{filteredBridges.length === 1 ? '' : 's'}
      </Text>
      <VStack w="100%">
        {filteredBridges.map((bridge) => (
          <BridgeItem bridge={bridge} key={bridge.name} />
        ))}
      </VStack>
    </>
  )
}
