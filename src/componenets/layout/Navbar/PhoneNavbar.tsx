import React, { useState } from "react";
import { motion, useAnimationControls } from 'framer-motion'
import { Props } from './Navbar'
import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function PhoneNavbar({ pages }: Props) {
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const controls = useAnimationControls()
    const buttonAnimation = {
        tap: {
            scale: 0.93,
            transition: {
                duration: 0.2
            }
        }
    }

    const menuAnimation = {
        hide: {
            scale: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                delay: 0.03,
            }
        },
        openOne: {
            scaleX: 1,
            scaleY: 0.5,
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        },
        openTwo: {
            scaleY: 1,
            transition: {
                duration: 0.2,
            }
        }
    }

    const clickHandle = async () => {
        if (isOpen) {
            await controls.start("hide")
        }
        else {
            console.log("hi")
            await controls.start("openOne")
            console.log("bye")
        }

        setIsOpen(!isOpen)
    }

    return (
        <div>
            <motion.div
                variants={buttonAnimation}
                whileTap="tap"
                className="mr-2 h-12 w-12 styled-background rounded-2xl styled-border material-shadow border-2 grid justify-center items-center cursor-pointer"
                onClick={() => { clickHandle() }}
            >
                <img src={`${window.location.origin}/images/navbar/menu-green.svg`} className="w-8 h-8" />
            </motion.div>
            <motion.div
                animate={controls}
                variants={menuAnimation}
                className={`absolute top-20 right-2 h-fit w-fit pl-20 pr-5 py-3
                styled-background rounded-2xl material-shadow flex flex-col items-end gap-3
                navbar-button-origin`}
            >
                {pages.map((page, index) => {
                    return createNavbarButton(page.name, page.link, index);
                })}
            </motion.div>
        </div>
    );
}

const createNavbarButton = (name: string,link: string,index: number): JSX.Element => {
    return (
        <NavLink
            key={index}
            className="us-link hover-underline normal-txt text-right text-xl"
            to={link}
        >
            {name}
        </NavLink>
    );
};