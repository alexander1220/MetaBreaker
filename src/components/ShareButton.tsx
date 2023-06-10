"use client";

import { Button, HStack, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useImmer } from 'use-immer';
import { BsTwitter } from 'react-icons/bs';

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
    const buildLink = `${host}/${path}`;
    const tweetText = 'Hey! Check out this crazy build i generated using metabreaker.gg: ' + buildLink;
    const finalTweet = tweetText.replace(' ', '%20');
    return (
        <HStack w={'25%'}>
            <CopyToClipboard text={buildLink}>
                <Button id='shareBtn' w={'100%'} _focus={{ bg: '#48BB78' }} onClick={() => CopiedTextButton()}>{buttonText}</Button>
            </CopyToClipboard>
            <IconButton
                as={'a'}
                href={'https://twitter.com/intent/tweet?hashtags=leagueoflegends,metabreaker&text=' + finalTweet}
                target='_blank'
                colorScheme='twitter'
                aria-label='Tweet Button'
                icon={<BsTwitter />}
            />
        </HStack>
    );
}
