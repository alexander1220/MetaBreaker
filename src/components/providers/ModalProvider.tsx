"use client";

import { createContext } from "react";
import { useImmer } from "use-immer";

export interface ModalContext {
    isRulesModalActive: boolean;
    isBugReportModalOpen: boolean;
    toggleRulesModal(): void;
    toggleBugReportModal(): void;
}

export const ModalContext = createContext({} as ModalContext);

export default function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isRulesModalActive, updateIsRulesModalActive] = useImmer(false);
    const [isBugReportModalOpen, updateBugReportRulesModalOpen] = useImmer(false);

    const toggleRulesModal = () => updateIsRulesModalActive(draft => !draft);
    const toggleBugReportModal = () => updateBugReportRulesModalOpen(draft => !draft);

    return (
        <ModalContext.Provider value={{ isRulesModalActive, toggleRulesModal, isBugReportModalOpen, toggleBugReportModal }}>
            {children}
        </ModalContext.Provider>
    );
}

