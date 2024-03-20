class MainGame extends Phaser.Scene
{
    constructor () {
        super('MainGame');
    }

    preload() {
        this.load.spritesheet('phaserman-dude', '../assets/sprites/dude.png', { frameWidth: 32, frameHeight: 48 })
    }
  
    create() {
        this.player = this.physics.add.sprite(100, 450, 'phaserman-dude')
        this.cursors = this.input.keyboard.createCursorKeys()
    }
  
    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160)
            this.player.anims.play('left', true)
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160)
            this.player.anims.play('right', true)
        } else {
            this.player.setVelocityX(0)
            this.player.anims.play('turn')
        }
  
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330)
        }
    }

}

export default MainGame;