/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Tilesheet-water.png":
/*!*********************************!*\
  !*** ./src/Tilesheet-water.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2f7d3cea0d7b035283b9bc629fb6138d.png";

/***/ }),

/***/ "./src/Tilesheet-water.tsx":
/*!*********************************!*\
  !*** ./src/Tilesheet-water.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"tileset":{"$":{"version":"1.2","tiledversion":"1.2.0","name":"Tilesheet-water","tilewidth":"32","tileheight":"32","tilecount":"64","columns":"8"},"image":[{"$":{"source":"Tilesheet-water.png","width":"256","height":"256"}}]}}

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/input.js");
/* harmony import */ var _wood_tileset_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wood_tileset.tsx */ "./src/wood_tileset.tsx");
/* harmony import */ var _wood_tileset_tsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wood_tileset_tsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wood_tileset_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wood_tileset.png */ "./src/wood_tileset.png");
/* harmony import */ var _wood_tileset_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wood_tileset_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tilesheet_water_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tilesheet-water.tsx */ "./src/Tilesheet-water.tsx");
/* harmony import */ var _Tilesheet_water_tsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Tilesheet_water_tsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Tilesheet_water_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tilesheet-water.png */ "./src/Tilesheet-water.png");
/* harmony import */ var _Tilesheet_water_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Tilesheet_water_png__WEBPACK_IMPORTED_MODULE_4__);

//import jsonMap from './map.json';





/** @class Game
 * A class representing the high-level functionality
 * of a game - the game loop, buffer swapping, etc.
 */
class Game {
    /** @constructor
     * Creates the game instance
     * @param {integer} width - the width of the game screen in pixels
     * @param {integer} heght - the height of the game screen in pixels
     */
    constructor(width, height) {
        this._start = null;
        this.WIDTH = width;
        this.HEIGHT = height;
        this.input = new _input__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.entities = [];

        // Set up the tilemap variables
        this.mapJson = __webpack_require__(/*! ./map.json */ "./src/map.json");
        let wood = new Image();
        wood.src = _wood_tileset_png__WEBPACK_IMPORTED_MODULE_2___default.a;
        let water = new Image();
        water.src = _Tilesheet_water_png__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.images = [wood, water];
        this.tilesets = [_wood_tileset_tsx__WEBPACK_IMPORTED_MODULE_1___default.a, _Tilesheet_water_tsx__WEBPACK_IMPORTED_MODULE_3___default.a];

        // Set up the back buffer
        this.backBuffer = document.createElement('canvas');
        this.backBuffer.width = this.WIDTH;
        this.backBuffer.height = this.HEIGHT;
        this.backBufferCtx = this.backBuffer.getContext('2d');

        this.mapBuffer = document.createElement('canvas');
        this.mapBuffer.width = this.WIDTH;
        this.mapBuffer.height = this.HEIGHT;
        this.mapBufferCtx = this.backBuffer.getContext('2d');

        // Set up the screen buffer
        this.screenBuffer = document.createElement('canvas');
        this.screenBuffer.width = this.WIDTH;
        this.screenBuffer.height = this.HEIGHT;
        this.screenBufferCtx = this.screenBuffer.getContext('2d');
        document.body.append(this.screenBuffer);
        if (!this._start) {
            this._start = 1;
            this.mapBufferCtx.drawImage(wood, 0, 0);
            /*for (let i = 0; i < this.mapJson.layers.length; i++) {
                let width = parseInt(this.mapJson.layers[i].width);
                let imagewidth = parseInt(this.tilesets[0].tileset.image[0].$.width);
                let size = parseInt(this.tilesets[0].tileset.$.tilewidth);
                //this.tilesets[0].tileset.image[0].$
                // this.tilesets[0].tileset.$
                let self = this;
                this.mapJson.layers[i].data.forEach(function (tile_idx, index) {
                    if (tile_idx == 0) {
                        return;
                    }
                    let img_x, img_y, s_x, s_y;
                    tile_idx--;
                    img_x = (tile_idx % (imagewidth / size)) * size;
                    img_y = ~~(tile_idx / (imagewidth / size)) * size;
                    s_x = (index % width) * size;
                    s_y = ~~(index / width) * size;
                    self.screenBufferCtx.drawImage(self.images[i], img_x, img_y, size, size,
                        s_x, s_y, size, size);
                });
            }*/
        }
        /*this.tilesets.forEach(function (tileset, index) {
            //var tileset = tileset;
            this.mapJson.layers.forEach(function (tile_idx, i) {
                if (tile_idx == 0) {
                    return;
                }
                let img_x, img_y, s_x, s_y;
                tile_idx--;
                img_x = (tile_idx % (tileset.imagewidth / size)) * size;
                img_y = ~~(tile_idx / (tileset.imagewidth / size)) * size;
                s_x = (i % layer.width) * size;
                s_y = ~~(i / layer.width) * size;
                s.drawImage(scene.tileset, img_x, img_y, size, size,
                    s_x, s_y, size, size);
            });
        });
        scene.layers.push(s.canvas.toDataURL());
        c.drawImage(s.canvas, 0, 0);*/
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
        console.log(this.jsonMap);
        console.log(this.tilesets);

        // TODO: Render game

        // Render entities
        this.entities.forEach(entity => entity.render(elapsedTime, this.backBufferCtx));

        // Flip the back buffer
        this.screenBufferCtx.drawImage(this.mapBuffer, 0, 0);
        //this.screenBufferCtx.drawImage(this.backBuffer, 0, 0);
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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



// Create the game
var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](1024, 768);

// Create the player and add it to the game
game.addEntity(new _player__WEBPACK_IMPORTED_MODULE_1__["default"](60, 60));

// Start the main game loop
game.loop();


/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });

/** @module Input
  * A class for handling input from the user
  * will work for all keys on the keyboard
  */
class Input {
  /** @constructor
    * Constructs a new instance of the Input class
    * and attaches event listeners to the window.
    */
  constructor() {
    this.oldState = {}
    this.newState = {}

    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      this.newState[event.key] = true;
    });

    window.addEventListener('keyup', (event) => {
      event.preventDefault();
      this.newState[event.key] = false;
    });

  }

  /** @method update
    * Copies the new state to the old state
    */
  update() {
    this.oldState = JSON.parse(JSON.stringify(this.newState));
  }

  /** @method keyPressed
    * Returns true if the specified key is
    * currently pressed.
    * @param {String} key - the key to test
    * @return {bool} if the key is pressed
    */
  keyPressed(key) {
    return this.newState[key];
  }

  /** @method keyDown
    * Returns true if the specified key
    * went down this frame
    * @param {String} key - the key to test
    * @return {bool} if the key is pressed
    */
  keyDown(key) {
    return this.newState[key] && !this.oldState[key];
  }

  /** @method keyUp
    * Returns true if the specified key
    * went up this frame
    * @param {String} key - the key to test
    * @return {bool} if the key is pressed
    */
  keyUp(key) {
    return !this.newState[key] && this.oldState[key];
  }
}


/***/ }),

/***/ "./src/map.json":
/*!**********************!*\
  !*** ./src/map.json ***!
  \**********************/
/*! exports provided: height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"height":24,"infinite":false,"layers":[{"data":[156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156,156],"height":24,"id":4,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":32,"x":0,"y":0},{"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,92,102,102,102,102,0,102,102,0,0,0,0,189,107,107,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,92,102,102,102,102,102,102,102,0,0,107,107,107,107,107,0,0,0,0,0,0,0,0,0,0,0,189,107,107,107,107,102,102,102,102,102,102,102,102,102,0,0,107,107,107,107,107,0,0,0,0,0,0,0,0,0,0,107,107,107,107,107,0,102,102,102,102,102,102,92,102,102,0,0,107,107,107,107,0,0,0,0,0,0,0,0,0,0,0,107,107,107,107,107,107,0,102,102,102,102,102,92,102,102,0,0,107,107,107,107,0,0,0,0,0,0,0,0,107,107,107,107,107,107,107,107,0,0,102,102,102,102,92,92,102,102,0,0,0,0,107,107,0,0,0,0,0,0,0,0,0,0,0,107,107,107,107,107,107,0,102,0,102,102,92,92,102,102,0,0,0,0,0,0,0,0,0,0,0,0,0,107,0,0,0,107,107,107,107,0,0,0,102,0,102,102,92,92,102,102,0,0,0,0,0,0,0,0,0,0,0,0,189,107,191,192,0,0,0,0,0,0,0,0,102,102,102,102,92,92,102,0,0,0,0,0,0,0,0,0,0,0,0,0,107,107,107,107,107,107,0,0,0,0,0,102,102,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,107,107,107,107,107,107,107,107,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,107,107,107,107,107,107,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,107,107,107,256,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,107,107,0,107,0,0,0,0,0,0,0,52,53,3221225557,53,3221225557,53,3221225557,54,0,0,0,0,0,0,0,0,0,0,0,0,0,107,0,0,0,0,0,0,0,0,0,0,68,293,285,285,293,284,293,3221225540,0,0,0,0,0,0,0,0,0,0,0,0,0,107,0,0,0,107,107,0,0,0,0,0,68,293,285,284,293,284,285,70,0,0,0,0,0,0,0,0,0,0,0,0,0,107,0,0,0,0,107,107,0,0,0,0,3221225542,284,285,284,284,285,292,70,0,0,0,0,0,0,0,0,0,107,107,107,107,107,0,0,0,0,0,0,0,0,0,0,68,285,284,293,285,292,284,3221225540,0,0,0,0,0,0,0,0,0,107,107,107,107,107,0,0,0,0,0,0,0,0,0,0,3221225542,292,293,284,284,285,284,70,0,0,0,0,0,0,0,0,0,107,107,107,107,107,0,0,0,0,0,0,0,0,0,0,68,292,284,285,285,293,284,70,0,0,0,0,0,0,0,0,0,107,107,107,107,107,0,0,0,0,0,0,0,0,0,147,84,85,88,284,292,292,87,3221225524,0,0,0,0,0,0,0,0,0,0,253,107,107,256,0,0,0,0,0,0,0,0,0,0,0,0,84,85,85,85,86,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":24,"id":5,"name":"water","opacity":1,"type":"tilelayer","visible":true,"width":32,"x":0,"y":0},{"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,189,190,191,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,205,206,207,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,189,190,191,192,0,0,0,0,0,221,222,223,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,205,206,207,208,0,0,0,0,0,237,238,239,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,221,222,223,224,0,0,0,0,0,253,254,255,256,0,0,0,0,0,0,0,0,0,0,189,190,191,192,0,0,0,0,0,237,238,239,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,205,206,207,208,0,0,0,0,0,253,254,255,256,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,221,222,223,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,237,238,239,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,254,255,256,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,189,190,191,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,205,206,207,208,0,0,0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,221,222,223,224,0,0,0,0,0,0,0,0,0,0,0,0,134,134,0,0,0,0,0,0,0,0,0,0,0,0,0,0,237,238,239,240,0,0,0,0,0,0,0,0,0,0,0,0,0,134,134,0,0,0,0,0,0,0,0,0,0,0,0,0,253,254,255,256,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,134,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,134,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,134,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":24,"id":6,"name":"trees","opacity":1,"type":"tilelayer","visible":true,"width":32,"x":0,"y":0}],"nextlayerid":8,"nextobjectid":16,"orientation":"orthogonal","renderorder":"right-down","tiledversion":"1.2.0","tileheight":32,"tilesets":[{"firstgid":1,"source":"wood_tileset.tsx"},{"firstgid":257,"source":"Tilesheet-water.tsx"}],"tilewidth":32,"type":"map","version":1.2,"width":32};

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/** @module Player
  * A class representing the player.
  */
class Player {
  /** @constructor
    * Constructs a new player instance
    * @param {float} x - the player's x position
    * @param {float} y - the player's y position
    */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /** @method update
    * Updates the player
    * @param {double} deltaT - the elapsed time
    * @param {Input} input - the input object
    */
  update(deltaT, input) {
    if(input.keyPressed("ArrowLeft")) this.x--;
    if(input.keyPressed("ArrowRight")) this.x++;
    if(input.keyPressed("ArrowUp")) this.y--;
    if(input.keyPressed("ArrowDown")) this.y++;
  }

  /** @method render
    * Renders the player
    * @param {double} deltaT - elapsed time
    * @param {Context2D} context - the rendering context
    */
  render(deltaT, context) {
    context.fillStyle = "blue";
    context.beginPath();
    context.arc(this.x, this.y, 25, 0, 2*Math.PI);
    context.fill();
  }

}


/***/ }),

/***/ "./src/wood_tileset.png":
/*!******************************!*\
  !*** ./src/wood_tileset.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2cafb91877cbda9df58aa5693a889f5d.png";

/***/ }),

/***/ "./src/wood_tileset.tsx":
/*!******************************!*\
  !*** ./src/wood_tileset.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"tileset":{"$":{"version":"1.2","tiledversion":"1.2.0","name":"wood_tileset","tilewidth":"32","tileheight":"32","tilecount":"256","columns":"16"},"image":[{"$":{"source":"wood_tileset.png","width":"512","height":"512"}}]}}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map