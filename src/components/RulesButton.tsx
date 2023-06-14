'use client';

import { Text, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, UnorderedList, ListItem } from '@chakra-ui/react';

export default function RulesButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Rules</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent m={'50px'}>
                    <ModalHeader>The Rules</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UnorderedList>
                            <ListItem><Text>Break the meta.</Text></ListItem>
                            <ListItem><Text>If you don&apos;t build <b>exactly</b> what you rolled... then what&apos;s the point of using it 🤨</Text></ListItem>
                            <ListItem><Text>You are allowed to switch up the order of the items.</Text></ListItem>
                        </UnorderedList>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}