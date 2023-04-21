"use client";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./providers/ThemeProvider";

export default function HTMLBody({ children }: { children: React.ReactNode }) {
    let { theme } = useContext<ThemeContextType>(ThemeContext);
    return (
        <html lang="en" data-theme={theme}>
            <body>
                {children}
            </body>
        </html>
    );
}