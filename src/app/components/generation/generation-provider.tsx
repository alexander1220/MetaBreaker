"use client";

import { createContext } from "react";
import { useImmer } from "use-immer";
import { Selectable } from "../champ-selection/champion-selection-provider";
import { Role } from "./Role";

export interface GenerationContextType {
    roles: ({
        role: Role;
    } & Selectable)[];
    toggleRole: (role: Role) => void;
}

export const GenerationContext = createContext<GenerationContextType>({
    roles: [],
    toggleRole: () => { }
});

function mapRolesToObjects() {
    return Object.values(Role).map(role => ({ role, selected: true }));
}

export default function GenerationProvider({ children }: { children: React.ReactNode }) {
    let [roles, updateRoles] = useImmer(mapRolesToObjects());

    function toggleRole(role: Role) {
        updateRoles(draft => {
            let roleToToggle = draft.find(r => r.role === role)!;
            if (roleToToggle.role === Role.Fill && !roleToToggle.selected) {
                draft.forEach(r => r.selected = true);
                return;
            }

            if (roleToToggle.role !== Role.Fill && roleToToggle.selected) {
                let fillRole = draft.find(r => r.role === Role.Fill)!;
                fillRole.selected = false;
            }
            roleToToggle.selected = !roleToToggle.selected;
        });
    }

    return (
        <GenerationContext.Provider value={{
            roles,
            toggleRole
        }}>
            {children}
        </GenerationContext.Provider>
    );
}