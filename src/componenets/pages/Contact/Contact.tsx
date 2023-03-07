import React, { ChangeEvent } from "react";
import "./Contact.scss";

type MailData = {
    [key: string]: string;
};

export default function Contact() {
    const mailData: MailData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const onSubmit = () => {
        const data = new URLSearchParams();
        data.append("name", mailData["name"]);
        data.append("email", mailData["email"]);
        data.append("subject", mailData["subject"]);
        data.append("message", mailData["message"]);

        // fetch(`http://13.40.136.147/php/mail.php`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     body: data,
        //     mode: "no-cors",
        // }).then(response => response.json()).then(data => {
        //     if (data.success === true) {
        //         console.log("success");

        //         return;
        //     }

        //     console.log(data.error[0]["mail"]);
        // }).catch(err => console.log(err));

        fetch(`http://13.40.136.147/php/mail.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.success)
            

            console.log(data.error[0].mail)
        })
        .catch(err => console.log(`error: ${err}`))
    };

    const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
        mailData[event.target.name] = event.target.value ?? "";
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="styled-background styled-border border-2 rounded-2xl w-136 material-shadow flex justify-start flex-col items-center py-6">
                <div className="">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={(event) => {
                            handleDataChange(event);
                        }}
                        className="h-9 mr-3 w-78 rounded-md focus:outline-none px-2 darkish-background input transition-shadow transition-color duration-300"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="h-9 ml-3 w-78 rounded-md focus:outline-none px-2 darkish-background input transition-shadow transition-color duration-300"
                        required
                    />
                </div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="h-9 mt-6 w-132 rounded-md focus:outline-none px-2 darkish-background input transition-shadow transition-color duration-300"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    className="h-64 mt-6 w-132 rounded-md focus:outline-none px-2 pt-1 darkish-background resize-none input transition-shadow transition-color duration-300"
                    required
                />
                <div className="w-full px-6">
                    <button
                        onClick={() => {onSubmit();}}
                        className="h-16 mt-6 w-fit px-4 darkish-background rounded-md flex items-center gap-4 button transition-shadow transition-color duration-300"
                    >
                        <p className="text-2xl font-bold tracking-wider">
                            SEND
                        </p>
                        {/* <img src={`${window.location.origin}/images/contact/mail-green.svg`} className="h-16 w-16 mx-auto -left-1 relative" /> */}
                    </button>
                </div>
            </div>
        </div>
    );
}
