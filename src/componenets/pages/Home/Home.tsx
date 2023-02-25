import React from "react";
import "./Home.scss";
import AboutMe from "./Introduction";
import RecentTechsTitle from "./RecentTechsTitle";
import RecentTechsScroller from "./RecentTechsScroller";


export default function Home(): JSX.Element {
    return (
        <div>
            <section id="introduction-section">
                <AboutMe />
                {/* <div
                    key={1}
                    id="top-line"
                    className="shadow-line after:-skew-y-6 w-screen line-bg h-6 relative isolate after:content-[''] after:absolute after:-z-10 after:inset-0 after:transition-colors after:duration-300"
                />
                <div
                    key={2}
                    id="middle-line"
                    className="shadow-line w-screen after:-skew-y-6 line-grad relative isolate after:absolute after:content-[''] after:inset-0 after:transition-colors after:duration-300 after:-z-10 h-72 lg:h-96 flex justify-center items-center"
                > */}
                {/* </div>
                <div
                    key={3}
                    id="bottom-line"
                    className="shadow-line after:-skew-y-6 w-screen line-bg h-6 relative isolate after:content-[''] after:absolute after:-z-10 after:inset-0 after:transition-colors after:duration-300"
                /> */}
            </section>
            <section id="languages-section">
                <RecentTechsTitle />
                <RecentTechsScroller />
            </section>
        </div>
    );
}