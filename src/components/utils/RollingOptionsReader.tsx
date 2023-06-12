import { Lane } from "components/types/enums/Lane";

export interface RollingOptions {
    seed: number;
    lanes: Map<Lane, boolean>;
    champId: number;
}

const lanesWithoutFill = Object.values(Lane).filter(l => l !== Lane.Fill);

export function readRollingOptionsFromParams(params: any) {
    if (params?.options && params.options.length === 1) {
        try {

            let decoded = Buffer.from(params.options[0], "base64url");
            console.log(decoded);
            let laneByte = decoded.readInt8(); // lane byte
            let seed = decoded.readFloatBE(1);
            let champId = decoded.readUInt8(5);

            let mappedLanes = lanesWithoutFill.map((lane, i) => ([lane, (laneByte & (1 << i)) !== 0] as [Lane, boolean]));


            return {
                lanes: new Map(mappedLanes),
                seed: seed,
                champId: champId
            }
        }
        catch (e) {
            console.error(e);
        }
    }
}