import ChampDrawer from '../../components/ChampDrawer';
import RollButton from '../../components/buttons/RollButton';
import RollSwitches from '../../components/switches/roll-switches';
import { StrictMode } from 'react';
import Providers from '../../components/providers/Providers';
import { Lane } from 'components/types/enums/Lane';
import RolledDisplay from 'components/RolledDisplay';

export interface RollingOptions {
  seed: string;
  lanes: Map<Lane, boolean>;
}

export default function Page({ params }: { params: any }) {

  let rollingOptions: RollingOptions | undefined;

  let decodedParams = params?.options ? Buffer.from(params?.options[0], "base64").toString() : null;

  if (decodedParams) {
    rollingOptions = {
      lanes: new Map([
        [Lane.Top, decodedParams[0] === "1"],
        [Lane.Jungle, decodedParams[1] === "1"],
        [Lane.Mid, decodedParams[2] === "1"],
        [Lane.Adc, decodedParams[3] === "1"],
        [Lane.Support, decodedParams[4] === "1"]
      ]),
      seed: decodedParams.slice(5)
    }
  }

  //TODO: add support for settings in the URL and mask using base64


  return (
    <StrictMode>
      <main className="container" style={{ maxWidth: 850 }}>
        <RolledDisplay />
        <RollButton rollingOptions={rollingOptions} />
        <RollSwitches />
        <ChampDrawer />
      </main>
    </StrictMode>
  )
}
