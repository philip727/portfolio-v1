import React, { useEffect, useState } from "react";
import hljs from "highlight.js"
import "highlight.js/styles/vs2015.css";
import "./CodeEditor.scss"

type FileDisplay = {
    fileName: string;
    codePreview: string;
    language: string;
    imageLogo?: string;
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
    });

    return (
        <div className="w-124 h-100 rounded-lg border styled-border styled-background flex flex-col justify-end items-center">
            <div className="w-120 h-fit flex  items-center">
                <div className="gap-px h-9 flex items-end border-background px-px rounded-t-lg">
                    {files?.map((value, index) => {
                        pagesToDisplay.push({
                            page: index,
                            code: value.codePreview,
                            language: value.language
                        });
                        return (
                            <div
                                key={index}
                                className={`w-fit px-4 h-9 ${
                                    index == 0 && index == files.length - 1
                                        ? "rounded-t-lg"
                                        : index == 0
                                        ? "rounded-tl-lg"
                                        : index == files.length - 1
                                        ? "rounded-tr-lg"
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
                                {value.imageLogo && (
                                    <img src={`${window.location.origin}/${value.imageLogo}`} className="w-4 h-4 mr-2" />
                                )}
                                <p className="text-sm">{value.fileName}</p>
                            </div>
                        );
                    })}
                    {/* <div className="w-fit px-4 h-9 rounded-tr-lg styled-background relative top-px flex flex-row justify-center items-center">
                        <p className="text-sm">ChunkGenerator.cs</p>
                    </div> */}
                </div>
            </div>
            <pre className="h-80 overflow-hidden w-120 border styled-border mb-5 z-10">
                <code className={`language-${pagesToDisplay[currentFile].language} overflow-scroll code-display h-full`}>
                    {pagesToDisplay[currentFile].code}
                </code>
            </pre>
        </div>
    );
}
