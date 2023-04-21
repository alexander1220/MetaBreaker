import ChampionSelectionProvider from "./champion-selection-provider";
import GenerationProvider from "./generation-provider";
import ModalProvider from "./modal-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ModalProvider>
            <ChampionSelectionProvider>
                <GenerationProvider>
                    {children}
                </GenerationProvider>
            </ChampionSelectionProvider>
        </ModalProvider>
    );

}