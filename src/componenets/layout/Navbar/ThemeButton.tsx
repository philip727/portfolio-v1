import React, { useState, Dispatch, SetStateAction, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ThemeButton() {
    const [theme, setTheme]: [string, Dispatch<SetStateAction<string>>] = useState("dark");
    const themeButtonIcon = useRef("./images/navbar/sun-icon.svg");

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
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <img src={themeButtonIcon.current} alt="Change Theme Button" />
        </motion.div>
    );
}
