'use client';
import { Skeleton, Image, Tooltip } from "@chakra-ui/react";
import { useState } from "react";

export default function ImageWithLoading({ src, alt, boxSize, tooltip }: { src: string, alt: string, boxSize: string, tooltip: string }) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <Skeleton isLoaded={isImageLoaded}>
            <Tooltip label={tooltip}>
                <Image fit={'contain'} onLoad={handleImageLoad} boxSize={boxSize} src={src} alt={alt} />
            </Tooltip>
        </Skeleton>
    )
}