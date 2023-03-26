import PickedDisplay from './components/picked-display';
import ChampDrawer from './components/champ-selection/champ-drawer';
import GenerateButton from './components/generate-button';
import GenerationProvider from './components/generation/generation-provider';

export default function Page() {
  return (
    <>
      <main className="container" style={{ maxWidth: 850 }}>
        <GenerationProvider>
          <PickedDisplay />
          <GenerateButton />
        </GenerationProvider>
        <ChampDrawer />
      </main>
    </>
  )
}
