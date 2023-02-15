import React, { useState, useEffect, useRef, ComponentType } from "react";

interface TypewriteProps {
    text: string;
    msDelay: number;
    childClass: string;
    childId: string;
}

export default function Typewriter(props: TypewriteProps) {
    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');
    
    useEffect(() => {
        index.current = 0;
        setCurrentText('');
    }, [props.text])
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentText((value) => value + props.text.charAt(index.current));
            index.current++;
        }, props.msDelay);
        
        return () => {
            clearTimeout(timeout);
        }
    }, [currentText])
    
    return <p className={props.childClass} id={props.childId}>{currentText}</p>
}
