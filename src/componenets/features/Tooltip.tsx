import React, { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
    children: ReactNode;
    text?: string;
}

export default function Tooltip({ children, text }: Props) {
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            ref={divRef}
            onHoverStart={() => {
                if (!tooltipRef.current || !divRef.current) return;
                tooltipRef.current.style.top = `-${tooltipRef.current.offsetHeight + 12}px`;
                setIsHovered(true);
            }}
            onHoverEnd={() => {
                if (!tooltipRef.current) return;
                setIsHovered(false);
            }}
            className="flex justify-center"
        >
            <motion.span
                animate={{ opacity: isHovered ? 1 : 0 }}
                ref={tooltipRef}
                className="whitespace-nowrap h-fit w-fit absolute z-50 text-center break-normal"
            >
                {text}
            </motion.span>
            {children}
        </motion.div>
    );
}
