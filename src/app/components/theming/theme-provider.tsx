"use client";

import React, { createContext, useState } from "react";

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}
export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.Dark,
    setTheme: () => { }
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(Theme.Dark);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
