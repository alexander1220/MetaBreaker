"use client";

import { MouseEventHandler, useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Button,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Textarea,
    VStack,
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { BugType } from "components/types/enums/BugType";

export default function BugReportModalToggleLink({ children }: { children: React.ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [textBoxValue, setTextBoxValue] = React.useState('')
    const [textBoxInvalid, setTextBoxInvalid] = React.useState(false)
    const [bugType, setBugType] = React.useState(BugType.Bug)
    const [sentReport, setSentReport] = React.useState(false)

    let handleInputChange = (e: any) => {
        let inputValue = e.target.value
        if (inputValue !== "")
            setTextBoxInvalid(false);
        setTextBoxValue(inputValue)
    }

    const eventHandler: MouseEventHandler = (event) => {
        event.preventDefault();
        onOpen();
    };

    async function trySendBugReport() {
        if (textBoxValue === "") {
            setTextBoxInvalid(true);
            return;
        } else {
            setSentReport(true);
            await fetch('/api/bug-report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    bug_type: bugType,
                    description: textBoxValue
                })
            });
            onClose();
            setSentReport(false);
        }
    }

    return (
        <>
            <Link style={{ color: 'red' }} href='' onClick={eventHandler}>{children}</Link>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
                <ModalOverlay />
                <ModalContent m={3}>
                    <ModalHeader>Create a ticket</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={3} align={'left'}>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                    {bugType.toString().toUpperCase()}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={() => setBugType(BugType.Bug)}>Bug</MenuItem>
                                    <MenuItem onClick={() => setBugType(BugType.Suggestion)}>Suggestion</MenuItem>
                                </MenuList>
                            </Menu>
                            <Textarea isInvalid={textBoxInvalid} value={textBoxValue} onChange={handleInputChange} placeholder='Tell us something about it' />
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button isLoading={sentReport} colorScheme='blue' mr={3} onClick={trySendBugReport}>
                            Send
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
