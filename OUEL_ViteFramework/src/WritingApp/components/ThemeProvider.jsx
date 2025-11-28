//https://webxlearner.com/how-can-i-implement-darkmode-in-tailwindcss-v4-using-vite-in-react-project/
import { useEffect, useState } from "react";

function DarkModeToggle(){
    const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
    }, [darkMode]);

    return (
    <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="px-4 py-2 mb-5 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-white shadow"
    >
        {darkMode ? "Chế độ: Sáng" : "Chế độ: Tối"}
    </button>
    );
};

export default DarkModeToggle;