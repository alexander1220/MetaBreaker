"use client";

import { MouseEventHandler, useContext } from "react";
import { ModalContext } from "../modal-provider";

export default function RuleModalToggleLink() {
    const { toggleRulesModal } = useContext(ModalContext);

    const eventHandler: MouseEventHandler = (event) => {
        event.preventDefault();
        toggleRulesModal();
    };

    return (
        <a href="#" onClick={eventHandler}>
            Rules
        </a>
    );
}
