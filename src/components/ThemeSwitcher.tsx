"use client";

import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const {setTheme, theme} = useTheme();

    return (
        <div className="flex">
            
            <button
                onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
                className=''>
                    Dark Mode
            </button>
        </div>
    );
}