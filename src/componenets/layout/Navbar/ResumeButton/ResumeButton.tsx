import { motion } from 'framer-motion'
import React from 'react'

export default function ResumeButton() {
  return (
  <a href={`${window.location.origin}/resume.pdf`}>
    <motion.div 
        className="w-12 xl:w-fit h-12 px-0 xl:px-2 styled-background styled-border 
        border-2 ml-2 xl:ml-7 rounded-md grid justify-center items-center cursor-pointer
        material-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <img className="block xl:hidden h-10 w-10" src={`${window.location.origin}/images/navbar/resume-green.svg`}/>
        <p className="hidden xl:block text-xl bright-text font-bold tracking-wider" >RESUME</p>
    </motion.div>
    </a>
  )
}
