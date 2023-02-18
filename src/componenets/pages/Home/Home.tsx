import React from "react";
import "./Home.css";
import MiddleParagraph from "./MiddleParagraph";

export default function Home(): JSX.Element {


    return (
        <div>
            <section id="introduction-section">
                <div id="top-line" className="after:-skew-y-6 w-screen line-bg h-3 sm:h-6 relative isolate after:content-[''] after:absolute after:-z-10 after:inset-0 after:transition-colors after:duration-300" />
                <div id="middle-line" className="w-screen after:-skew-y-6 line-grad relative isolate after:absolute after:content-[''] after:inset-0 after:transition-colors after:duration-300 after:-z-10 h-60 sm:h-72 lg:h-96 flex justify-center items-center">
                    <MiddleParagraph />
                </div>
                <div id="bottom-line" className="after:-skew-y-6 w-screen line-bg h-3 sm:h-6 relative isolate after:content-[''] after:absolute after:-z-10 after:inset-0 after:transition-colors after:duration-300" />
            </section>
        </div>
    );
}
