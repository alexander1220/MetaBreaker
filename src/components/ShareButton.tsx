"use client";

import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useImmer } from 'use-immer';

export default function ShareButton({ path }: { path: string }) {
    let [host, updateHost] = useImmer("");
    useEffect(() => {
        updateHost(window.location.host);
    }, []);
    return (
        <CopyToClipboard text={`${host}/${path}`}>
            <button>Share</button>
        </CopyToClipboard>
    );
}
