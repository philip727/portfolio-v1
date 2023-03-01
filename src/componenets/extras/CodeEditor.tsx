import React, { useEffect, useState } from "react";
import hljs from "highlight.js"
import "highlight.js/styles/vs2015.css";
import "./CodeEditor.scss"

type FileDisplay = {
    fileName: string;
    codePreview: string;
    language: string;
};

type PageDisplay = {
    page: number;
    code: string;
    language: string;
};

interface Props {
    files: FileDisplay[];
    onPageChange?: (page: number) => void
}

export default function CodeEditor({ files, onPageChange }: Props) {
    const [currentFile, setCurrentFile] = useState(0);
    const pagesToDisplay: PageDisplay[] = [];

    useEffect(() => {
        hljs.highlightAll();
    }, [currentFile]);

    return (
        <div className="w-11/12 lg:w-156 h-100 rounded-md border styled-border styled-background flex flex-col justify-end items-center material-shadow">
            <div className="w-95p h-fit flex items-center">
                <div className="gap-px h-9 flex items-end border-background px-px rounded-t-md">
                    {files?.map((value, index) => {
                        let fileImage = "";
                        pagesToDisplay.push({
                            page: index,
                            code: value.codePreview,
                            language: value.language
                        });
                        switch(value.language) {
                            case "csharp": 
                                fileImage = `images/logos/file_csharp.svg`
                                break;
                        }
                        return (
                            <div
                                key={index}
                                className={`w-fit px-4 h-9 ${
                                    index == 0 && index == files.length - 1
                                        ? "rounded-t-md"
                                        : index == 0
                                        ? "rounded-tl-md"
                                        : index == files.length - 1
                                        ? "rounded-tr-md"
                                        : " "
                                } ${
                                    currentFile == index
                                        ? "code-background selected-tab"
                                        : "styled-background nonselected-tab"
                                } relative top-px ${currentFile == index ? "z-20" : " "} flex justify-center items-center cursor-pointer select-none`}
                                onClick={() => {
                                    setCurrentFile(index);
                                    if(onPageChange) {
                                        onPageChange(index)
                                    }
                                }}
                            >
                                {fileImage.length > 0 && (
                                    <img src={`${window.location.origin}/${fileImage}`} className="w-4 h-4 mr-2" />
                                )}
                                <p className="text-sm text-ellipsis whitespace-nowrap">{value.fileName}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <pre className="w-95p h-80 overflow-hidden border styled-border mb-5 z-10">
                <code className={`language-${pagesToDisplay[currentFile].language} overflow-scroll code-display h-full`}>
                    {pagesToDisplay[currentFile].code}
                </code>
            </pre>
        </div>
    );
}
