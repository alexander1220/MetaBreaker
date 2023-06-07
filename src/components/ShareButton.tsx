"use client";

import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useImmer } from 'use-immer';

export default function ShareButton({ path }: { path: string }) {
    let [host, updateHost] = useImmer("");
    let [buttonText, setButtonText] = useState("Share");
    useEffect(() => {
        updateHost(window.location.host);
    }, []);
    function CopiedTextButton() {
        setButtonText("Copied!");
        setTimeout(() => setButtonText("Share"), 2500);
    }
    return (
        <CopyToClipboard text={`${host}/${path}`}>
            <Button id='shareBtn' w={'25%'} _focus={{ bg: '#48BB78' }} onClick={() => CopiedTextButton()}>{buttonText}</Button>
        </CopyToClipboard>
    );
}