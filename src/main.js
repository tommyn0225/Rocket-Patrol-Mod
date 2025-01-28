//src/main.js

/* Tommy Nguyen
Rocket Patrol Modded
~6 hours(?)

Total points (20)
Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
- created a new sprite on Piskelapp and built off the logic of Spaceship.js to create Fastship.js and making
it smaller, faster, and worth more points

Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
- built off the logic of the timer system, displaying it for testing purposing and adding 2 seconds for each time that
shipExplode() executes. The update() in Rocket.js handles misses, subtracting 5 seconds everytime the rocket resets on miss


*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
