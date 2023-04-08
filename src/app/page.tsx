import RolledDisplay from './components/rolled-display';
import ChampDrawer from './components/champ-selection/champ-drawer';
import RollButton from './components/roll-button';
import RollSwitches from './components/roll-switches';
import { StrictMode } from 'react';
import Providers from './components/providers';

export default function Page() {

  return (
    <StrictMode>
      <main className="container" style={{ maxWidth: 850 }}>
        <Providers>
          <RolledDisplay />
          <RollButton />
          <RollSwitches />
          <ChampDrawer />
        </Providers>
      </main>
    </StrictMode>
  )
}
