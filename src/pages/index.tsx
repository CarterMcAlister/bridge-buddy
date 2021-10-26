import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { bridges, Chain, chains } from '../bridges'

export const Card: React.FC = ({ children }) => {
  return (
    <Box
      as="article"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      // bg="white"
    >
      {children}
    </Box>
  )
}

export const BridgeList = () => {}

export const NetworkSelect: React.FC = () => {
  const [chainOne, setChainOne] = useState<Chain | undefined>(undefined)
  const [chainTwo, setChainTwo] = useState<Chain | undefined>(undefined)

  const filteredBridges = useMemo(
    () =>
      bridges.filter(
        (bridge) =>
          (!chainOne || bridge.chains.includes(chainOne?.symbol)) &&
          (!chainTwo || bridge.chains.includes(chainTwo?.symbol))
      ),
    [chainOne, chainTwo]
  )

  return (
    <Card>
      <Text>From</Text>
      <ChainPicker selectedChain={chainOne} onSelect={setChainOne} />
      <Text>To</Text>
      <ChainPicker selectedChain={chainTwo} onSelect={setChainTwo} />

      {filteredBridges.map((bridge) => (
        <Box>
          <Text>{bridge.name}</Text>
          <Text>{bridge.chains.join(', ')}</Text>
        </Box>
      ))}
    </Card>
  )
}

export const ChainPicker = ({
  selectedChain,
  onSelect,
}: {
  selectedChain: Chain | undefined
  onSelect: (chain: Chain | undefined) => void
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [filterText, setFilterText] = useState<string | undefined>(undefined)

  const chainList = useMemo(
    () =>
      Object.values(chains).filter(
        (chain) =>
          !filterText ||
          chain.name.toLowerCase().includes(filterText.toLowerCase()) ||
          chain.symbol.toLowerCase().includes(filterText.toLowerCase())
      ),
    [filterText]
  )

  const onClick = (chain: Chain | undefined) => {
    onSelect(chain)
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>
        {selectedChain?.name ?? 'Select network'}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select a chain</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Search name"
            />
            {chainList.map((chain) => (
              <ChainOption chain={chain} key={chain.symbol} onClick={onClick} />
            ))}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={() => onClick(undefined)}>
              Clear
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export const ChainOption = ({
  chain,
  onClick,
}: {
  chain: Chain
  onClick: (chain: Chain) => void
}) => {
  return (
    <HStack align="start" onClick={() => onClick(chain)}>
      <Icon name="check" color="green.500" />
      <Box>
        <Text>{chain.name}</Text>
        <Text>{chain.symbol}</Text>
      </Box>
    </HStack>
  )
}

const Home = () => {
  return (
    <Box mb={8} w="full">
      <NetworkSelect />
    </Box>
  )
}

export default Home
