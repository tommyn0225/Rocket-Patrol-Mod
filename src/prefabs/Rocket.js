//src/prefabs/Rocket.js
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        scene.add.existing(this) // add to existing, displayList, updateList
        this.isFiring = false // track rocket's firing status
        this.moveSpeed = 2 // rocket speed in pixels/frame

        this.sfxShot = scene.sound.add('sfx-shot')

    }

    update() {
        // Get mouse pointer
        const pointer = this.scene.input.activePointer;

        // left/right movement
        if(!this.isFiring) {
            // handle keyboard movement
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed
            }
            // handle mouse movement
            else if (pointer.isDown) {
                this.x = Phaser.Math.Clamp(pointer.x, borderUISize + this.width, game.config.width - borderUISize - this.width)
            }
        }
        // fire button (keyboard || mouse)
        if((Phaser.Input.Keyboard.JustDown(keyFIRE) || pointer.leftButtonDown()) && !this.isFiring) {
            this.isFiring = true
            this.sfxShot.play()
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed
        }
        //reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false
            this.y = game.config.height - borderUISize - borderPadding

            // penalize time
            this.scene.clock.delay -= 5000 // -5 seconds
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }
}