import {
  Box,
  Button,
  HStack,
  Image,
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
  VStack,
} from '@chakra-ui/react'
import { MotionBox } from 'components/motion/Box'
import React, { useMemo, useState } from 'react'
import { Chain, chains } from '../bridges'

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

  const onCloseModal = () => {
    setFilterText(undefined)
    onClose()
  }

  return (
    <>
      <MotionBox
        as={Button}
        onClick={onOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {selectedChain?.logo && (
          <Image
            src={selectedChain.logo}
            w="30px"
            h="30px"
            borderRadius="full"
            mr={2}
          />
        )}
        {selectedChain?.name ?? 'Select chain'}
      </MotionBox>

      <Modal isOpen={isOpen} onClose={onCloseModal} scrollBehavior="inside">
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
            <VStack pt={4} spacing={4} align="flex-start">
              {chainList.map((chain) => (
                <ChainOption
                  chain={chain}
                  key={chain.symbol}
                  onClick={onClick}
                />
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={() => onClick(undefined)}>
              Clear
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
    <HStack
      cursor="pointer"
      align="center"
      w="100%"
      onClick={() => onClick(chain)}
    >
      <Image src={chain.logo} rounded="full" w="40px" h="40px" />
      <Box pl="1">
        <Text>{chain.name}</Text>
        <Text>{chain.symbol}</Text>
      </Box>
    </HStack>
  )
}
