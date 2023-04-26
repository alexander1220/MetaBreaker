"use client";

import { useRouter } from "next/navigation";
export default function RollButton() {
    const router = useRouter();

    return (<button onClick={() => {
        router.push("/");
    }}>ROLL</button>);
}
