import React from "react";
import CarouselSlider from "../../layout/CarouselSlider";
import "./Home.css";
import MiddleParagraph from "./MiddleParagraph";

const slideClass = "slide-container h-28 flex items-center justify-start p-3 w-56 rounded-2xl border-2"
const imgClass = "h-16 w-16 select-none"

export default function Home(): JSX.Element {
    return (
        <div>
            <section id="introduction-section">
                <div
                    id="top-line"
                    className="shadow-line after:-skew-y-6 w-screen line-bg h-3 sm:h-6 relative isolate after:content-[''] after:absolute after:-z-10 after:inset-0 after:transition-colors after:duration-300"
                />
                <div
                    id="middle-line"
                    className="shadow-line w-screen after:-skew-y-6 line-grad relative isolate after:absolute after:content-[''] after:inset-0 after:transition-colors after:duration-300 after:-z-10 h-60 sm:h-72 lg:h-96 flex justify-center items-center"
                >
                    <MiddleParagraph />
                </div>
                <div
                    id="bottom-line"
                    className="shadow-line after:-skew-y-6 w-screen line-bg h-3 sm:h-6 relative isolate after:content-[''] after:absolute after:-z-10 after:inset-0 after:transition-colors after:duration-300"
                />
            </section>


            <section id="languages-section">
                <div className="flex items-center justify-center w-full">
                    <CarouselSlider id="carousel-languages-wrapper" className="h-44 relative grid place-items-center overflow-hidden" duration={20} slides={
                        [
                        {
                            name: "C#",
                            img: "./images/languages/csharp.svg",
                            sClassName: slideClass,
                            imgClass: imgClass,
                        },
                        {
                            name: "Python",
                            img: "./images/languages/python.svg",
                            sClassName: slideClass,
                            imgClass: imgClass,
                        },
                        {
                            name: "React",
                            img: "./images/languages/react.svg",
                            sClassName: slideClass,
                            imgClass: imgClass,
                        },
                        {
                            name: "Javascript",
                            img: "./images/languages/javascript.svg",
                            sClassName: slideClass,
                            imgClass: imgClass + " rounded-md",
                        },
                        {
                            name: "Typescript",
                            img: "./images/languages/typescript.svg",
                            sClassName: slideClass,
                            imgClass: imgClass + " rounded-md",
                        },
                        {
                            name: "Tailwind CSS",
                            img: "./images/languages/tailwindcss.svg",
                            sClassName: slideClass,
                            imgClass: imgClass,
                        },
                        ]} />
                    
                </div>
            </section>
        </div>
    );
}
