//src/prefabs/Fastship.js
class FastShip extends Spaceship {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame, pointValue)
        this.moveSpeed = game.settings.spaceshipSpeed * 1.5
        this.setScale(0.5)
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed
        
        // wrap from left to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width
        }
    }

    // reset position
    reset() {
        this.x = game.config.width
    }
}