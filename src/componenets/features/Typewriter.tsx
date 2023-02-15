import React, { useState, useEffect, useRef, MutableRefObject, Dispatch, SetStateAction } from "react";

interface TypewriteProps {
    text: string;
    msDelay: number;
    childClass?: string;
    childId?: string;
}

export default function Typewriter(props: TypewriteProps): JSX.Element {
    const index: MutableRefObject<number> = useRef(0);
    const [currentText, setCurrentText]: [string, Dispatch<SetStateAction<string>>] = useState('');
    
    // If the text is changed, then on re-render we need to reset
    useEffect(() => {
        index.current = 0;
        setCurrentText('');
    }, [props.text])
    

    // Slowly types out the provided text at x speed
    useEffect(() => {
        const timeout: NodeJS.Timeout = setTimeout(() => {
            setCurrentText((value) => value + props.text.charAt(index.current));
            index.current++;
        }, props.msDelay);
        
        return () => {
            clearTimeout(timeout);
        }
    }, [currentText])
    
    return <p className={props.childClass} id={props.childId}>{currentText}</p>
}
