import RolledDisplay from './components/rolled-display';
import ChampDrawer from './components/champ-selection/champ-drawer';
import GenerateButton from './components/generate-button';
import GenerationProvider from './components/generation/generation-provider';
import ChampionSelectionProvider from './components/champ-selection/champion-selection-provider';

export default function Page() {
  return (
    <>
      <main className="container" style={{ maxWidth: 850 }}>
        <ChampionSelectionProvider>
          <GenerationProvider>
            <RolledDisplay />
            <GenerateButton />
          </GenerationProvider>
          <ChampDrawer />
        </ChampionSelectionProvider>
      </main>
    </>
  )
}
