import RolledDisplay from './components/rolled-display';
import ChampDrawer from './components/champ-selection/champ-drawer';
import RollButton from './components/roll-button';
import GenerationProvider from './components/generation/generation-provider';
import ChampionSelectionProvider from './components/champ-selection/champion-selection-provider';
import RollSwitches from './components/roll-switches';
import { StrictMode } from 'react';

export default function Page() {

  return (
    <StrictMode>
      <main className="container" style={{ maxWidth: 850 }}>
        <ChampionSelectionProvider>
          <GenerationProvider>
            <RolledDisplay />
            <RollButton />
            <RollSwitches />
          </GenerationProvider>
          <ChampDrawer />
        </ChampionSelectionProvider>
      </main>
    </StrictMode>
  )
}
