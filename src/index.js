import Game from './game';
import Player from './player';

// Create the game
var game = new Game(1024, 768);

// Create the player and add it to the game
//game.addEntity(new Player(game.WIDTH/2, game.HEIGHT/2));
game.addEntity(new Player(game.WIDTH/2, game.HEIGHT/2));

// Start the main game loop
game.loop();
