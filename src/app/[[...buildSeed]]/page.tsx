import RolledDisplay from '../components/rolled-display';
import ChampDrawer from '../components/champ-selection/champ-drawer';
import RollButton from '../components/roll-button';
import RollSwitches from '../components/roll-switches';
import { StrictMode } from 'react';
import Providers from '../components/providers';

export default function Page({ params }: { params: any }) {

  let buildSeed = params?.buildSeed;
  if (buildSeed)
    buildSeed = buildSeed[0];
  //TODO: add support for settings in the URL and mask using base64


  return (
    <StrictMode>
      <main className="container" style={{ maxWidth: 850 }}>
        <RolledDisplay />
        <RollButton buildSeed={buildSeed} />
        <RollSwitches />
        <ChampDrawer />
      </main>
    </StrictMode>
  )
}
