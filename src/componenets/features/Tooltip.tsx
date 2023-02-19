import React, { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
    children: ReactNode;
    text?: string;
    childKey?: number
}

export default function Tooltip({ children, text, childKey }: Props) {
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="flex justify-center"
        >
            <motion.span
                initial={{ opacity: 0}}
                animate={{ opacity: isHovered ? 1 : 0 }}
                ref={tooltipRef}
                className="whitespace-nowrap h-fit w-fit absolute z-50 text-center break-normal cursor-default select-none"
            >
                {text}
            </motion.span>
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
            >
                {children}
            </motion.div>
        </div>
    );
}
