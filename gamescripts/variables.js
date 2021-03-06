//-------------------------------------------------------------------------------------------------------------------------------//
//
//  Here we're going to initialize all the constants & variables we'll use in the game.
//
//-------------------------------------------------------------------------------------------------------------------------------//

// Initialize the default game constants
const PLAYGROUND_HEIGHT = 400;
const PLAYGROUND_WIDTH = 1000;
const REFRESH_RATE = 25;
const PAUSE_AFTER_DEATH = 5000;
const RESPAWN_TIME = -1;
const DAMAGE_RATE = 10; // 1 damage per second
const INVINCIBLE = 2000;
const FLASH_SPEED = 250;

// Initialize Bullets
const MAX_BULLETS = 20;
const BULLET_SIZE = 7;
const BULLET_SPEED = 25;    // pixels per frame (any faster and things get glitchy)
const FIRE_RATE = 200;      // Wait 200 ms between firing each bullet
const EXPIRATION = 1000;    // Bullets older than this are automatically reloaded
var BULLETS = [];           // Array to loop through
var CURRENT_BULLET = 0;     // Pointer to current bullet

// Initialize player constants
const NUM_REPLAYS = 3; // number of replays you get
const PLAYER_HEALTH = 20;
const PLAYER_SPEED = 5; // Player initial speed
const PLAYER_WIDTH = 20;
const PLAYER_HEIGHT = 20;
var PLAYER_POSITION = []; // list containing [x,y] coordinates

// Stuff involving the crosshair
const MAX_CROSSHAIR_DISTANCE = 100;
const CROSSHAIR_WIDTH = 10;
const CROSSHAIR_HEIGHT = 10;
var MOUSE_POSITION = [];
var CROSSHAIR_DIRECTION = 0; // in radians

// Initialize enemy constants
const GRUNT_ENEMY_HEALTH = 1;
const GRUNT_ENEMY_SPEEDX = 1;
const GRUNT_ENEMY_SPEEDY = 1;
const MAX_ENEMIES = 20;
const ENEMY_SPAWN_DELAY = 2000;
var NUM_ENEMIES = 0;

// Animation Holder
var playerAnimation = new Array();
var crosshair = new Array();
var bullet = new Array();
var enemies = new Array(2);

// Game State
var bossWave = false;
var playerHit = false;
var timeOfRespawn = 0;
var gameOver = true;
var grenades = 0;
var bulletCount = 0;
var killcount = 0;
var mouseDown = false;
var fire_rate_timeout;
var damage_rate_timeout;
var flash_timeout;
