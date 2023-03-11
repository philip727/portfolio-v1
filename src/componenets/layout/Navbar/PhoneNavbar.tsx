import React, { useState } from "react";
import { motion, useAnimationControls } from 'framer-motion'
import { Props } from './Navbar'
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { click } from "@testing-library/user-event/dist/click";

export default function PhoneNavbar({ pages }: Props) {
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const controls = useAnimationControls()
    const buttonAnimation = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.85,
            transition: {
                duration: 0.2
            },
        },
    }

    const menuAnimation = {
        hide: {
            scale: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                delay: 0.03,
            },
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        },
    }

    const clickHandle = async () => {
        if (isOpen) {
            await controls.start("hide")
        } 
        else {
            await controls.start("show")
        }

        setIsOpen(!isOpen)
    }

    return (
        <div>
            <motion.div
                animate={controls}
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                className="mr-2 h-12 w-12 rounded-3xl styled-background styled-border material-shadow
                border-2 grid justify-center items-center cursor-pointer"
                onClick={() => { clickHandle() }}
            >
                <img src={`${window.location.origin}/images/navbar/menu-green.svg`} className="w-6 h-6" />
            </motion.div>
            <motion.div
                animate={controls}
                variants={menuAnimation}
                initial="hide"
                className="absolute top-20 right-2 h-fit w-fit pl-20 pr-5 py-3 styled-background 
                rounded-2xl material-shadow flex flex-col items-end gap-3 navbar-button-origin z-[999]"
            >
                {pages.map((page, index) => {
                    return createNavbarButton(page.name, page.link, index, clickHandle);
                })}
            </motion.div>
        </div>
    );
}

const createNavbarButton = (name: string,link: string,index: number, clickHandle: () => Promise<void>): JSX.Element => {
    return (
        <NavLink
            key={index}
            className="us-link normal-txt text-right text-xl"
            to={link}
            onClick={clickHandle}
        >
            {name}
        </NavLink>
    );
};