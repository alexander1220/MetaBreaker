"use client";

import { useContext } from "react";
import { ModalContext } from "./modal-provider";

export default function ModalToggleLink() {
    const { isRulesModalActive, toggleRulesModal } = useContext(ModalContext);
    return (
        <a data-target="modal-example" onClick={toggleRulesModal}>
            Rules
        </a>
    );
}
