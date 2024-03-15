//import phaser
import Phaser from 'phaser';
import Title from './scenes/title';


const config = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: '100%',
      height: '100%',
      backgroundColor: '#ecf0f1',
      parent: 'phaserman-game'
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: [Title] // We'll add more scenes here later
  }
  const game = new Phaser.Game(config)
  