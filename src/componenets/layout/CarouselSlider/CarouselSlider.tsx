import React, { Children, ReactNode } from "react";
import { motion } from 'framer-motion'
import Tooltip from "../../extras/Tooltip";
import './CarouselSlider.scss'


interface Slide {
    name: string;
    img: string;
    sClassName?: string
    imgClass?: string
    tooltip?: string
}

interface Props {
    id: string;
    className: string;
    slides: Array<Slide>
    duration?: number
}

export default function CarouselSlider({ id, className, slides, duration }: Props) {
    return (
        <div id={id} className={className} style={{width: `${14*slides.length}rem`}}>
            <motion.div 
                animate={{ x: '-50%' }}
                transition={{ duration: duration == null ? 3 : duration, repeat: Infinity, ease: "linear"}}
                className="flex w-fit gap-4">
                {slides.map((value, index) => {
                    return createSlide(value, index)
                })}
                {slides.map((value, index) => {
                    return createSlide(value, (slides.length)+index)
                })}
            </motion.div>
        </div>
    );
}


const createSlide = ({ name, img, sClassName, imgClass, tooltip }: Slide,  index: number): ReactNode => {
    return (
        <Tooltip key={index} text={tooltip}>
            <motion.div whileHover={{ scale: 1.1 }} className={sClassName}>
                <img className={imgClass} src={`${window.location.origin}${img}`} />
                <p className="text-center m-auto font-medium text-lg">{name}</p>
            </motion.div>
        </Tooltip>
    )
}