import { useState, useEffect, useRef } from "react";

export default function Typewriter({ text, msDelay, tag }) {
    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');
    const Component = tag;

    useEffect(() => {
        index.current = 0;
        setCurrentText('');
    }, [text])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentText((value) => value + text.charAt(index.current));
            index.current++;
        }, msDelay);
        
        return () => {
            clearTimeout(timeout);
        }
    }, [currentText])

    return <Component>{currentText}</Component>;
}
