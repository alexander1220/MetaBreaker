"use client";

import { useContext } from "react";
import { useImmer } from "use-immer";
import { GenerationContext } from "./generation-provider";
import { Role } from "./Role";

export function RoleSwitch({ role, selected }: { role: Role, selected: boolean }) {
    let { toggleRole } = useContext(GenerationContext);

    function toggle() {
        toggleRole(role);
    }
    return (
        <div>
            <input type="checkbox" id={`${role}Switch`} name={`${role}Switch`} role="switch" checked={selected} onChange={toggle} />
            <label htmlFor={`${role}Switch`}>{role}</label>
        </div>);
}

