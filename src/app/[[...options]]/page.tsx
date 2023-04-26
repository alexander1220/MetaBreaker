import { Lane } from 'components/types/enums/Lane';
import ChampDrawer from 'components/ChampDrawer';
import RolledDisplay from 'components/RolledDisplay';
import RollSwitches from 'components/switches/roll-switches';

export interface RollingOptions {
  seed: number;
  lanes: Map<Lane, boolean>;
  champId: number;
}

const lanesWithoutFill = Object.values(Lane).filter(l => l !== Lane.Fill);



export default function Page({ params }: { params: any }) {

  let rollingOptions: RollingOptions | undefined;
  if (params?.options && params.options.length === 1) {
    let decoded = Buffer.from(params.options[0], "base64url");
    console.log(decoded);
    let laneByte = decoded.readInt8(); // lane byte
    let seed = decoded.readFloatBE(1);
    let champId = decoded.readUInt8(5);

    let mappedLanes = lanesWithoutFill.map((lane, i) => ([lane, (laneByte & (1 << i)) !== 0] as [Lane, boolean]));


    rollingOptions = {
      lanes: new Map(mappedLanes),
      seed: seed,
      champId: champId
    }
  }

  return (
    <main className="container" style={{ maxWidth: 850 }}>
      <RolledDisplay rollingOptions={rollingOptions} />
      <RollSwitches />
      <ChampDrawer />
    </main>
  )
}
