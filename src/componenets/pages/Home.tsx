import React from "react";
import './Home.css'

export default function Home(): JSX.Element {
    return (
        <div>
            <section id="introduction-section">
                <div id="top-line" className="diagonal thin-line full-width line-bg" />
                <div id="middle-line" className="diagonal mega-thick-line full-width line-grad">
                    <div id="middle-wrapper">
                        <div id="middle-title-wrapper">
                            <div className="side-line"></div><h1 className="big-title">ABOUT ME</h1><div className="side-line"></div>
                        </div>
                        <p className="sig-paragraph centred-paragraph">Hello! My name is Philip and I extremely enjoy programming! <br/> I have been developing since 2018
                        and have developed almost daily since. <br/> Over the years I have worked with quite a few programming languages.
                        </p>
                    </div>
                </div>
                <div id="bottom-line" className="diagonal thin-line full-width line-bg" />
            </section>
        </div>
    );
}
