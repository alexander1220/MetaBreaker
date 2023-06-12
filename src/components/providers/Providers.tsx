import ChampionSelectionProvider from "./ChampionSelectionProvider";
import GenerationProvider from "./GenerationProviderReducer";
import ModalProvider from "./ModalProvider";
import ThemeProvider from "./ThemeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <ModalProvider>
                <ChampionSelectionProvider>
                    <GenerationProvider>
                        {children}
                    </GenerationProvider>
                </ChampionSelectionProvider>
            </ModalProvider>
        </ThemeProvider>
    );

}