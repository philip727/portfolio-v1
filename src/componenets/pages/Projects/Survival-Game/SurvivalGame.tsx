import React, { useEffect, useState } from "react";
import "./SurvivalGame.scss";
import CodeEditor from "../../../extras/CodeEditor";
import { motion } from "framer-motion";

const inventoryMarkdown = `namespace Philip.Inventory
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
        }`;

const chunkMarkdown = `[BurstCompile]
private void UpdateChunks()
{
    int chunkX = Mathf.FloorToInt(s_viewerPosition.x / _worldGenerationSettings.ChunkSize);
    int chunkY = Mathf.FloorToInt(s_viewerPosition.y / _worldGenerationSettings.ChunkSize);
    Vector2Int bottomLeftOfCurrentChunk = new Vector2Int(chunkX * _worldGenerationSettings.ChunkSize, chunkY * _worldGenerationSettings.ChunkSize);

    // Clear the chunks rendered from last frame as we don't want to check them in this dict
    _chunksReceivedToRenderThisFrame.Clear();

    for (int x = -MAX_VIEW_DISTANCE; x < MAX_VIEW_DISTANCE; x++)
    {
        for (int y = -MAX_VIEW_DISTANCE; y < MAX_VIEW_DISTANCE; y++)
        {
            // The current chunk coordinates
            Vector2Int bottomLeftOfChunkInViewDist = new Vector2Int(bottomLeftOfCurrentChunk.x + (x * _worldGenerationSettings.ChunkSize),
                                                                    bottomLeftOfCurrentChunk.y + (y * _worldGenerationSettings.ChunkSize));

            ChunkData chunkData;
            if (!_chunksThatHaveBeenCreated.ContainsKey(bottomLeftOfChunkInViewDist))
            {
                // At this point the chunk is in the view distance but has never been created
                chunkData = _worldGenerationHandler.RequestChunkData(bottomLeftOfChunkInViewDist.x, bottomLeftOfChunkInViewDist.y);
                CreateChunkFromData(chunkData);
                _chunksThatHaveBeenCreated.Add(bottomLeftOfChunkInViewDist, chunkData);
            }
            else
            {
                // The chunk has been created before and is now in the view distance
                _chunksThatHaveBeenCreated.TryGetValue(bottomLeftOfChunkInViewDist, out chunkData);

                // If it's not visible, then we should render it
                if(!chunkData.IsVisible)
                {
                    chunkData.SetVisible(true);
                }
            }`;

const ruleTileMarkdown = `public abstract class DamageableBehaviour : MonoBehaviour, IDamageable
{
    [field: SerializeField] public int MaxHealth { private set; get; }
    [field: SerializeField] public int Health { private set; get; }

    public virtual void Death()
    {
        Destroy(gameObject);
    }

    public void TakeDamage(int damage)
    {
        Health -= damage;

        if(Health <= 0)
        {
            Death();
        }
    }
}`;

export default function SurvivalGame() {
    const [currentPage, setCurrentPage] = useState(0);

    const textSlide = {
        hidden: {
            x: -85,
        },
        show: {
            x: 0,
        },
    };

    const imageAnimations = {
        start: {
            scale: 0.93,
            opacity: 0,
        },
        show: {
            opacity: 1,
        },
        hover: {
            scale: 0.98,
            transition: {
                duration: 0.1,
                delay: 0,
            },
        },
    };

    const transition = {
        duration: 0.1,
        type: "spring",
        stiffness: 150,
        damping: 20,
    };

    return (
        <div>
            <section id="survival-game" className="relative">
                <div className="w-full grid justify-center">
                    <motion.h1
                        className="text-7xl font-bold tracking-wider text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                    >
                        Survival Game
                    </motion.h1>
                    <motion.p
                        className="text-center text-3xl font-normal bright-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                    >
                        A 16-bit infinitely generated survival game made in
                        unity.
                    </motion.p>
                    <div className="xl-offset:flex hidden flex-row justify-center items-center mt-12 gap-3">
                        <motion.img
                            src={`${window.location.origin}/images/projects/SurvivalGame/survival-game-2.png`}
                            className="max-w-md 3xl:max-w-xl 2k:max-w-2xl material-shadow rounded-sm saturate-50 hover:saturate-100 transition-all duration-300"
                            variants={imageAnimations}
                            initial="start"
                            whileInView="show"
                            whileHover="hover"
                        />
                        <motion.img
                            src={`${window.location.origin}/images/projects/SurvivalGame/survival-game-1.png`}
                            className="max-w-md 3xl:max-w-xl 2k:max-w-2xl material-shadow rounded-sm saturate-50 hover:saturate-100 transition-all duration-300"
                            variants={{
                                ...imageAnimations,
                                start: { 
                                    ...imageAnimations.start, 
                                    scale: 1 
                                },
                                hover: {
                                    ...imageAnimations.hover,
                                    scale: 1.05,
                                },
                            }}
                            initial="start"
                            whileInView="show"
                            whileHover="hover"
                        />
                        <motion.img
                            src={`${window.location.origin}/images/projects/SurvivalGame/survival-game-1.png`}
                            className="max-w-md 3xl:max-w-xl 2k:max-w-2xl material-shadow rounded-sm saturate-50 hover:saturate-100 transition-all duration-300"
                            variants={imageAnimations}
                            initial="start"
                            whileInView="show"
                            whileHover="hover"
                        />
                    </div>
                    <div className="flex items-start mt-20 w-full gap-16">
                        {currentPage == 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-end w-1/2"
                            >
                                <motion.h1
                                    className="w-full text-6xl font-bold mt-6 text-right"
                                    variants={textSlide}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={transition}
                                >
                                    Grind & Expand
                                </motion.h1>
                                <motion.p
                                    className="w-full bright-text text-2xl mt-2 text-right"
                                    variants={{
                                        ...textSlide,
                                        hidden: { x: -125 },
                                    }}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={transition}
                                >
                                    Get materials and expand your base!
                                </motion.p>
                                <motion.p
                                    className="max-w-2xl w-full text-lg font-light text-right"
                                    variants={{
                                        ...textSlide,
                                        hidden: { x: -165 },
                                    }}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={transition}
                                >
                                    Scavenge and farm for materials, searching
                                    the vast environment for unique biomes and
                                    new structures with new materials to gather.
                                    Create new machinery to help with your
                                    automation and farming! Collect the rarest
                                    items and show them off in your base!
                                </motion.p>
                            </motion.div>
                        )}
                        {currentPage == 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-end w-1/2"
                            >
                                <motion.h1
                                    className="text-6xl font-bold mt-6 text-right w-full"
                                    variants={textSlide}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={transition}
                                >
                                    Explore... Infinitely!
                                </motion.h1>
                                <motion.p
                                    className="bright-text text-2xl mt-2 text-right w-full"
                                    variants={{
                                        ...textSlide,
                                        hidden: { x: -125 },
                                    }}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={transition}
                                >
                                    Never ending exploration!
                                </motion.p>
                                <motion.p
                                    className="text-lg max-w-2xl font-light text-right w-full"
                                    variants={{
                                        ...textSlide,
                                        hidden: { x: -165 },
                                    }}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={transition}
                                >
                                    Explore the infinitely expanding unqiue
                                    world, it never ends and it's never the
                                    same! With tonnes of biomes to discover, new
                                    enemies to fight, unique drops to claim and
                                    new resources to utilize.
                                </motion.p>
                            </motion.div>
                        )}
                        {currentPage == 2 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-end w-1/2"
                            >
                                <motion.h1
                                    className="text-6xl font-bold mt-6 text-right w-full"
                                    variants={textSlide}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={transition}
                                >
                                    Kill... Kill... Kill...
                                </motion.h1>
                                <motion.p
                                    className="bright-text text-2xl mt-2 text-right w-full"
                                    variants={{
                                        ...textSlide,
                                        hidden: { x: -125 },
                                    }}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={transition}
                                >
                                    Survive! But most importantly, loot.
                                </motion.p>
                                <motion.p
                                    className="text-lg max-w-2xl font-light text-right w-full"
                                    variants={{
                                        ...textSlide,
                                        hidden: { x: -165 },
                                    }}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={transition}
                                >
                                    By time it's night you will have to protect
                                    your base from the pesky creatures that roam
                                    the lands. Find and destroy bosses to get
                                    their unique loot, weapons and tools! Expect
                                    a different battle from every enemy, you
                                    never know what they might have up their
                                    sleeve.
                                </motion.p>
                            </motion.div>
                        )}
                        <div className="w-1/2">
                            <CodeEditor
                                files={[
                                    {
                                        fileName: "Inventory.cs",
                                        codePreview: inventoryMarkdown,
                                        language: "csharp",
                                    },
                                    {
                                        fileName: "ChunkRenderer.cs",
                                        codePreview: chunkMarkdown,
                                        language: "csharp",
                                    },
                                    {
                                        fileName: "DamageableBehaviour.cs",
                                        codePreview: ruleTileMarkdown,
                                        language: "csharp",
                                    },
                                ]}
                                onPageChange={(page) => setCurrentPage(page)}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
