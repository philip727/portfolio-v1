import React, { useEffect } from "react";
import "./SurvivalGame.scss";
import CodeEditor from "../../../extras/CodeEditor";

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

const chunkMarkdown = 
`[BurstCompile]
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
            }`

const ruleTileMarkdown = 
`[System.Serializable]
public class RuleTile
{
    [SerializeField] private SpriteType _spriteType = SpriteType.Default;
    [ConditionalField("_spriteType", SpriteType.Default)] public Tile tile;
    [ConditionalField("_spriteType", SpriteType.Animated)] public AnimatedTile animatedTile;
    public SpriteType SpriteType { get { return _spriteType; } }
    [field: SerializeField] public List<RuleNodes> RequiredLandNodes { private set; get; } = new List<RuleNodes>();
    [field: SerializeField] public List<RuleNodes> RequiredNothingNodes { private set; get; } = new List<RuleNodes>();
    [field: SerializeField] public List<RuleNodes> AddColliders { private set; get; } = new List<RuleNodes>();

    public Vector3Int ConvertRuleToOffset(RuleNodes ruleNode)
    {
        RuleNodesByCoordinate.TryGetValue(ruleNode, out Vector2Int offset);
        return (Vector3Int)offset;
    }

    // Checks through its needs, if it meets then it will be available
    public bool CheckIfMeetsRequirements(ChunkData chunkData, int x, int y)
    {
        foreach (RuleNodes requiredNode in RequiredLandNodes)
        {
            RuleNodesByCoordinate.TryGetValue(requiredNode, out Vector2Int offset);
            Vector2Int coordinates = chunkData.Coordinates + new Vector2Int(x, y) + offset;

            if (!WorldGenerationHandler.Instance.IsCoordinateWater(coordinates))
            {
                continue;
            }

            return false;
        }`

export default function SurvivalGame() {

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
                    <CodeEditor files={[
                        {
                            fileName: "Inventory.cs",
                            codePreview: inventoryMarkdown,
                            language: "csharp",
                            imageLogo: `/images/logos/file_csharp.svg`
                        },
                        {
                            fileName: "ChunkGenerator.cs",
                            codePreview: chunkMarkdown,
                            language: "csharp",
                            imageLogo: `/images/logos/file_csharp.svg`
                        },
                        {
                            fileName: "RuleTile.cs",
                            codePreview: ruleTileMarkdown,
                            language: "csharp",
                            imageLogo: `/images/logos/file_csharp.svg`
                        }
                    ]} />
                </div>
            </section>
        </div>
    );
}
