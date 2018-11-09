import pandaTileset from './Panda2.tsx';
import pandaTilesetImage from './Panda2.png';

/** @module Player
 * A class representing the player.
 */
export default class Player {
    /** @constructor
     * Constructs a new player instance
     * @param {float} x - the player's x position
     * @param {float} y - the player's y position
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.DIRECTIONS = {
            SOUTH: {idx: [5, 6, 7]},
            NORTH: {idx: [10, 11, 12]},
            WEST: {idx: [25, 26, 27]},
            EAST: {idx: [15, 16, 17]}
        };
        this.direction = this.DIRECTIONS.EAST;
        this.moving = false;

        this.panda = new Image();
        this.panda.onload = () => {
            this.pandaLoaded = true;
        };
        this.panda.src = pandaTilesetImage;
        this.movingIndex = 1;
        this.timerMove = 0;
    }

    /** @method update
     * Updates the player
     * @param {double} deltaT - the elapsed time
     * @param {Input} input - the input object
     */
    update(deltaT, input, solidTiles) {
        let prevX = this.x;
        let prevY = this.y;

        if (input.keyPressed("ArrowLeft")) {
            this.x--;
            this.direction = this.DIRECTIONS.WEST;
            this.moving = true;
        }
        else if (input.keyPressed("ArrowRight")) {
            this.x++;
            this.direction = this.DIRECTIONS.EAST;
            this.moving = true;
        }
        else if (input.keyPressed("ArrowUp")) {
            this.y--;
            this.direction = this.DIRECTIONS.NORTH;
            this.moving = true;
        }
        else if (input.keyPressed("ArrowDown")) {
            this.y++;
            this.direction = this.DIRECTIONS.SOUTH;
            this.moving = true;
        }
        else {
            this.moving = false;
        }
        if (this.moving) {
            let tileMapIndex = Math.floor((this.y + 32) / 32) * 32 + Math.floor((this.x + 32) / 32);
            if (solidTiles.includes(tileMapIndex)) {
                this.x = prevX;
                this.y = prevY;
                //console.log('x: ' + this.x + ' y: ' + this.y + ' tile: ' + tileMapIndex);
            }
            let tileMapIndex2 = Math.floor((this.y + 32) / 32) * 32 + Math.floor((this.x) / 32);
            if (solidTiles.includes(tileMapIndex2)) {
                this.x = prevX;
                this.y = prevY;
                //console.log('x: ' + this.x + ' y: ' + this.y + ' tile: ' + tileMapIndex);
            }

            //Check map boundaries
            if (this.x + 16 < 0 || this.x + 16 > 1024 || this.y + 16 < 0 || this.y + 16 > 768) {
                this.x = prevX;
                this.y = prevY;
            }
        }
    }

    /** @method render
     * Renders the player
     * @param {double} deltaT - elapsed time
     * @param {Context2D} context - the rendering context
     */
    render(deltaT, context) {
        if (this.pandaLoaded) {
            let imagewidth = parseInt(pandaTileset.tileset.image[0].$.width);
            let size = parseInt(pandaTileset.tileset.$.tilewidth);
            let tile_idx = 0;
            let index = 0;
            let width = 5;
            if (this.moving) {
                tile_idx = this.direction.idx[this.movingIndex];
                this.timerMove = this.timerMove + deltaT;
                if (this.timerMove > 200) {
                    if (this.movingIndex % 2 === 0) {
                        this.movingIndex = 1;
                    } else {
                        this.movingIndex = 2;
                    }
                    this.timerMove = 0;
                }

            } else {
                tile_idx = this.direction.idx[0];
            }

            let s_x, s_y;
            s_x = (tile_idx % width) * size;
            s_y = ~~(tile_idx / width) * size;
            context.drawImage(this.panda, s_x, s_y, size, size,
                this.x, this.y, size, size);
        }
    }
}
