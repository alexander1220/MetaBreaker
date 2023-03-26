"use client";

import { useContext } from "react";
import { GenerationContext } from "./generation/generation-provider";
import { Role } from "./generation/Role";
import { RoleSwitch } from "./generation/role-switch";

export default function GenerateButton() {
    let { roles } = useContext(GenerationContext);

    return (
        <>
            <button>ROLL</button>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                {roles.map(role => <RoleSwitch key={role.role} role={role.role} selected={role.selected} />)}
            </div>
        </>
    );
}