import React, { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import csharp from "highlight.js/lib/languages/csharp";
import "highlight.js/styles/vs2015.css";
import "./SurvivalGame.scss";

export default function SurvivalGame() {
    hljs.registerLanguage("csharp", csharp);
    
    const inventoryMarkdown = 
`namespace Philip.Inventory
{
    [System.Serializable]
    public class Inventory<TItem, TItemType> where TItem : InventoryItem, new() where TItemType : Enum
    {
        public string InventoryName { private set; get; }
        [field: SerializeField] public InventorySlot<TItem, TItemType>[] Slots { protected set; get; } = new InventorySlot<TItem, TItemType>[10];

        // Creates the inventory with default amount
        public Inventory(string inventoryName)
        {
            InventoryName = inventoryName;
            Slots = new InventorySlot<TItem, TItemType>[24];
            ConstructSlots();
        }`

    useEffect(() => {
        hljs.highlightAll();
    })


    return (
        <div>
            <section id="survival-game-title" className="relative">
                <div className="w-full flex flex-col justify-center items-center">
                    <h1 className="text-7xl font-bold tracking-wider text-center">
                        Survival Game
                    </h1>
                    <p className="text-center text-3xl font-normal bright-text">
                        A 16-bit infinitely generated survival game made in
                        unity.
                    </p>
                    <div className="w-124 h-96 rounded-2xl border styled-border styled-background flex flex-col justify-end items-center">
                        <div className="w-120 h-8 flex flex-row justify-start items-end">
                            <div className="w-fit px-2 py-1 border relative top-1 rounded-tl-xl styled-border">
                                <p>Inventory.cs</p>
                            </div>
                            <div className="w-fit px-2 py-1 border relative top-1 styled-border">
                                <p>ChunkGenerator.cs</p>
                            </div>
                        </div>
                        <pre className="h-80 overflow-hidden w-120 border styled-border mb-5 z-20">
                            <code className="language-csharp overflow-scroll h-full">{inventoryMarkdown}</code>
                        </pre>
                    </div>
                </div>
            </section>
        </div>
    );
}
