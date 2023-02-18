import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    text?: string;
}

export default function Tooltip({ children }: Props) {
    return (
    <div>
        {children}
    </div>
    );
}