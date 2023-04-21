"use client";

import { useContext } from "react";
import { ThemeContext, ThemeContextType, Theme } from "../providers/ThemeProvider";

export default function ThemeSwitch() {
    const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);

    function toggleTheme() {
        if (theme === Theme.Dark) {
            setTheme(Theme.Light);
        } else {
            setTheme(Theme.Dark);
        }
    }

    return (
        <>
            <input
                type="checkbox"
                name="switchTop"
                role="switch"
                id="themeSwitch"
                onClick={toggleTheme}
            />
            <label htmlFor="themeSwitch" style={{ display: 'inline', margin: 0 }}>
                Theme
            </label>
        </>
    );
}