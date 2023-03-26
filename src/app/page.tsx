import PickedDisplay from './components/picked-display';
import ChampDrawer from './components/champ-selection/champ-drawer';
import GenerateButton from './components/generate-button';

export default function Page() {
  return (
    <>
      <main className="container" style={{ maxWidth: 850 }}>
        <PickedDisplay />
        <GenerateButton />
        <ChampDrawer />
      </main>
    </>
  )
}
