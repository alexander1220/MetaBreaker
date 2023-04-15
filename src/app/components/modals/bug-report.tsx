"use client";

import { ModalContext } from "../modal-provider";
import { MouseEventHandler, useContext } from "react";
import { BugReportSubmitButton } from "./bug-report-submit-button";
import { useImmer } from "use-immer";


export enum BugType {
    Bug = "bug",
    Suggestion = "suggestion"
}

export default function BugReportModal() {
    const { isBugReportModalOpen, toggleBugReportModal } = useContext(ModalContext);
    const [bugType, updateBugType] = useImmer(BugType.Bug);
    const [description, updateDescription] = useImmer("");

    const eventHandler: MouseEventHandler = (event) => {
        event.preventDefault();
        toggleBugReportModal();
    };

    return (
        <dialog id="bug-popup" open={isBugReportModalOpen}>
            <article>
                <a href="#close" aria-label="Close" className="close" data-target="bug-popup" onClick={eventHandler} />
                <h3>Create a ticket</h3>
                <label htmlFor="bug_type">Ticket</label>
                <select id="bug_type" name="bug_type" value={bugType} onChange={(event) => updateBugType(event.target.value as BugType)} required>
                    <option value={BugType.Bug}>Bug</option>
                    <option value={BugType.Suggestion}>Suggestion</option>
                </select>

                <label htmlFor="bug_description">Tell us something about it</label>
                <textarea id="bug_description" name="description" cols={40} rows={3} placeholder="Give us information..."
                    maxLength={2000} required style={{ minWidth: 500 }} value={description} onChange={(event) => updateDescription(event.target.value)}></textarea>
                <small>We'll try to take care of it ASAP. <span id="bug_char_count">0</span>/2000</small>

                <footer>
                    <BugReportSubmitButton bug_type={bugType} description={description} />
                </footer>
            </article >
        </dialog >
    );
}


