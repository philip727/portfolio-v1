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
            className="flex items-center justify-center ml-2  md:ml-3 lg:ml-5 rounded-md sm:rounded-xl transition-colors duration-300 cursor-pointer px-1.5 sm:px-2 2xl:px-2.5"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <img
                className="w-3 h-6 sm:w-4 sm:h-8 md:w-5 md:h-9 lg:w-7 lg:h-11 xl:w-8 xl:h-12 2xl:w-8 2xl:h-12 select-none"
                src={themeButtonIcon.current}
                alt="Change Theme Button"
            />
        </motion.div>
    );
}
