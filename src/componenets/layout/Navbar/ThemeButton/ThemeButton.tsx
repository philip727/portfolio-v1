import React, { useState, Dispatch, SetStateAction, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ThemeButton() {
    const [theme, setTheme]: [string, Dispatch<SetStateAction<string>>] = useState("dark");
    const themeButtonIcon = useRef<string>("./images/navbar/sun-icon.svg");

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        if (theme == "light") {
            themeButtonIcon.current = "./images/navbar/sun-icon.svg";
            setTheme("dark");
        } else {
            themeButtonIcon.current = "./images/navbar/moon-icon.svg";
            setTheme("light");
        }
    };

    return (
        <motion.div
            id="theme-button"
            className="flex items-center justify-center ml-2  md:ml-3 rounded-lg sm:rounded-xl transition-colors duration-300 cursor-pointer px-2 sm:px-2.5"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <img
                className="w-4 h-8 sm:w-8 sm:h-12 select-none"
                src={themeButtonIcon.current}
                alt="Change Theme Button"
            />
        </motion.div>
    );
}
