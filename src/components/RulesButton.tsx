'use client';

import { Text, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';

export default function RulesButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Rules</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>The Rules</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Break the meta.</Text>
                        <Text>If you don't build EXACTLY what you rolled... then what's the point of using it 😪</Text>
                        <Text>You are allowed to switch up the order of the items.</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}