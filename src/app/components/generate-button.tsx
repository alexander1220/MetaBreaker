import { RoleSwitch, Role } from "./generation/RoleSwitch";

export default function GenerateButton() {

    return (
        <>
            <button>ROLL</button>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <RoleSwitch role={Role.Top} />
                <RoleSwitch role={Role.Jungle} />
                <RoleSwitch role={Role.Mid} />
                <RoleSwitch role={Role.Adc} />
                <RoleSwitch role={Role.Support} />
                <RoleSwitch role={Role.Fill} />
            </div>
        </>
    );
}