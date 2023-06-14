import { Lane } from "./enums/Lane";

const ddragonVersion = '13.11.1';
export const ddragonUrl = `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/img`;

export const laneMappings = new Map([
    [Lane.Top, "top"],
    [Lane.Jungle, "jungle"],
    [Lane.Mid, "middle"],
    [Lane.Adc, "bottom"],
    [Lane.Support, "utility"],
]);