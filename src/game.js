import Input from './input';
import woodTileset from './wood_tileset.tsx';
import woodTilesetImage from './wood_tileset.png';
import waterTileset from './Tilesheet-water.tsx';
import waterTilesetImage from './Tilesheet-water.png';

/** @class Game
 * A class representing the high-level functionality
 * of a game - the game loop, buffer swapping, etc.
 */
export default class Game {
    /** @constructor
     * Creates the game instance
     * @param {integer} width - the width of the game screen in pixels
     * @param {integer} heght - the height of the game screen in pixels
     */
    constructor(width, height) {
        this._start = null;
        this.WIDTH = width;
        this.HEIGHT = height;
        this.input = new Input();
        this.entities = [];

        // Set up the tilemap variables
        this.mapJson = require('./map.json');

        this.wood = new Image();
        this.wood.onload = () => {
            this.woodLoaded = true;
        };
        this.wood.src = woodTilesetImage;

        this.water = new Image();
        this.water.onload = () => {
            this.waterLoaded = true;
        };
        this.water.src = waterTilesetImage;
        this.tilesets = [woodTileset, woodTileset, waterTileset];

        // Set up the back buffer
        this.backBuffer = document.createElement('canvas');
        this.backBuffer.width = this.WIDTH;
        this.backBuffer.height = this.HEIGHT;
        this.backBufferCtx = this.backBuffer.getContext('2d');

        // Set up the screen buffer
        this.screenBuffer = document.createElement('canvas');
        this.screenBuffer.width = this.WIDTH;
        this.screenBuffer.height = this.HEIGHT;
        this.screenBufferCtx = this.screenBuffer.getContext('2d');
        document.body.append(this.screenBuffer);

    }

    /** @method addEntity
     * Adds an entity to the game world
     * Entities should have an update() and render()
     * method.
     * @param {Object} entity - the entity.
     */
    addEntity(entity) {
        this.entities.push(entity);
    }

    /** @method update
     * Updates the game state
     * @param {integer} elapsedTime - the number of milliseconds per frame
     */
    update(elapsedTime) {

        // Update game entitites
        this.entities.forEach(entity => entity.update(elapsedTime, this.input));

        // Swap input buffers
        this.input.update();
    }

    /** @method render
     * Renders the game state
     * @param {integer} elapsedTime - the number of milliseconds per frame
     */
    render(elapsedTime) {
        // Clear the back buffer
        this.backBufferCtx.fillStyle = "white";
        this.backBufferCtx.fillRect(0, 0, this.WIDTH, this.HEIGHT);

        // TODO: Render game

        // Parse the world
        if (this.woodLoaded && this.waterLoaded) {
            this.images = [this.wood, this.wood, this.water];
            //this._start = 1;
            for (let i = 0; i < this.mapJson.layers.length; i++) {
                let width = parseInt(this.mapJson.layers[i].width);
                let imagewidth = parseInt(this.tilesets[i].tileset.image[0].$.width);
                let size = parseInt(this.tilesets[i].tileset.$.tilewidth);
                //this.tilesets[0].tileset.image[0].$
                // this.tilesets[0].tileset.$
                let self = this;
                this.mapJson.layers[i].data.forEach(function (tile_idx, index) {
                    if (tile_idx == 0) {
                        return;
                    }
                    let img_x, img_y, s_x, s_y;
                    if (i === 2) {
                        tile_idx = tile_idx - 256;
                    }
                    tile_idx--;
                    img_x = (tile_idx % (imagewidth / size)) * size;
                    img_y = ~~(tile_idx / (imagewidth / size)) * size;
                    s_x = (index % width) * size;
                    s_y = ~~(index / width) * size;
                    self.backBufferCtx.drawImage(self.images[i], img_x, img_y, size, size,
                        s_x, s_y, size, size);
                });
            }
        }

        // Render entities
        this.entities.forEach(entity => entity.render(elapsedTime, this.backBufferCtx));

        // Flip the back buffer
        this.screenBufferCtx.drawImage(this.backBuffer, 0, 0);
    }

    /** @method loop
     * Updates and renders the game,
     * and calls itself on the next draw cycle.
     * @param {DOMHighResTimestamp} timestamp - the current system time
     */
    loop(timestamp) {
        var elapsedTime = this._frame_start ? timestamp - this._frame_start : 0;
        this.update(elapsedTime);
        this.render(elapsedTime);
        this._frame_start = timestamp;
        window.requestAnimationFrame((timestamp) => {
            this.loop(timestamp)
        });
    }
}
