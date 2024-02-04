"use client";

import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const {setTheme, theme} = useTheme();

    return (
        <div className="flex">
            
            <button
                onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
                className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 13V2a6 6 0 1 1 0 12"/></svg>
            </button>
        </div>
    );
}