"use client";

import { MouseEventHandler, useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";

export default function BugReportModalToggleLink({ children }: { children: React.ReactNode }) {
    const { toggleBugReportModal } = useContext(ModalContext);

    const eventHandler: MouseEventHandler = (event) => {
        event.preventDefault();
        toggleBugReportModal();
    };

    return (
        <a href="#" onClick={eventHandler}>
            {children}
        </a>
    );
}
