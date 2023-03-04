import React from "react";
import './Contact.scss'

export default function Contact() {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <form className="styled-background styled-border border-2 rounded-2xl h-112 w-156 material-shadow flex justify-start flex-col items-center">
                <div className="mt-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="h-10 mr-3 w-96 rounded-md focus:outline-none px-2 darkish-background input transition-shadow transition-color duration-300"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="h-10 ml-3 w-96 rounded-md focus:outline-none px-2 darkish-background input transition-shadow transition-color duration-300"
                        required
                    />
                </div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="h-10 mt-6 w-140 rounded-md focus:outline-none px-2 darkish-background input transition-shadow transition-color duration-300"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    className="h-80 mt-6 w-140 rounded-md focus:outline-none px-2 pt-1 darkish-background resize-none input transition-shadow transition-color duration-300"
                    required
                />
                <div className="w-full px-6">
                    <button type="submit" name="submit" className="h-16 mt-6 w-fit px-4 darkish-background rounded-md flex items-center gap-4 button transition-shadow transition-color duration-300">
                        <p className="text-2xl font-bold tracking-wider">SEND MAIL</p>
                        {/* <img src={`${window.location.origin}/images/contact/mail-green.svg`} className="h-16 w-16 mx-auto -left-1 relative" /> */}
                    </button>
                </div>
            </form>
        </div>
    );
}
