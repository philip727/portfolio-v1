import React, { Children, ReactNode } from "react";
import { motion } from 'framer-motion'


interface Slide {
    name: string;
    img: string;
    sClassName?: string
    imgClass?: string
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
                animate={{ x: '-50.53%' }}
                transition={{ duration: duration == null ? 3 : duration, repeat: Infinity, ease: "linear"}}
                className="flex w-fit gap-4">
                {slides.map((value, index) => {
                    return createSlide(value, index)
                })}
                {slides.map((value, index) => {
                    return createSlide(value, index)
                })}
            </motion.div>
        </div>
    );
}


const createSlide = ({ name, img, sClassName, imgClass }: Slide,  index: number): ReactNode => {
    return (
        <div key={index} className={sClassName}>
            <img className={imgClass} src={img} />
        </div>
    )
}