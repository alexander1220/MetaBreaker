import ChampionSelectionProvider from "./champ-selection/champion-selection-provider";
import GenerationProvider from "./generation/generation-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChampionSelectionProvider>
            <GenerationProvider>
                {children}
            </GenerationProvider>
        </ChampionSelectionProvider>
    );

}