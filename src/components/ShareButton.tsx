"use client";

import { Button, HStack, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useImmer } from 'use-immer';
import { BsTwitter } from 'react-icons/bs';

export default function ShareButton({ path }: { path: string }) {
    let [origin, updateOrigin] = useImmer("");
    let [buttonText, setButtonText] = useState("Share");
    useEffect(() => {
        updateOrigin(window.location.origin);
    }, []);
    function CopiedTextButton() {
        setButtonText("Copied!");
        setTimeout(() => setButtonText("Share"), 2500);
    }
    const buildLink = `${origin}/${path}`;
    const tweetText = 'Hey! Check out this crazy build i generated using metabreaker.gg: ' + buildLink;
    const finalTweet = tweetText.replace(' ', '%20');
    return (
        <HStack>
            <CopyToClipboard text={buildLink}>
                <Button id='shareBtn' w={{ base: '100px', md: '150px' }} _focus={{ bg: '#48BB78' }} onClick={() => CopiedTextButton()}>{buttonText}</Button>
            </CopyToClipboard>
            <IconButton
                as={'a'}
                href={'https://twitter.com/intent/tweet?hashtags=leagueoflegends,metabreaker&text=' + finalTweet}
                target='_blank'
                colorScheme='twitter'
                aria-label='Tweet Button'
                icon={<BsTwitter />}
            />
        </HStack >
    );
}
