'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/rubik/400.css'
import '@fontsource/roboto/400.css'

export default function UiWrapper({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ChakraProvider theme={extendTheme({
            fonts: {
                heading: `'Rubik', sans-serif`,
                body: `'Roboto', sans-serif`
            }
        })}>
            {children}
        </ChakraProvider>
    )
}
