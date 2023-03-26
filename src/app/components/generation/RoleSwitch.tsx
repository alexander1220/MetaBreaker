export enum Role {
    Top = 'Top',
    Jungle = 'Jungle',
    Mid = 'Mid',
    Adc = 'Adc',
    Support = 'Support',
    Fill = 'Fill'
}
export function RoleSwitch({ role }: { role: Role; }) {
    return (
        <div>
            <input type="checkbox" id={`${role}Switch`} name={`${role}Switch`} role="switch" checked={true} />
            <label htmlFor={`${role}Switch`}>{role}</label>
        </div>);
}
