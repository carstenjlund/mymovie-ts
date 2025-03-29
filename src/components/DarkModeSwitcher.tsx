"use client";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from 'next-themes'

export default function DarkModeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme()

    console.log(resolvedTheme);
    
    
    const handleThemeChange = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }
   

    return (
        <button
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
            onClick={handleThemeChange}
        >
            {resolvedTheme == "dark" ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
        </button>
    );
}