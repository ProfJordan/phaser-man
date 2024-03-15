import phasermanImg from '../assets/sprites/phaserman.png';


class Title extends Phaser.Scene
{
    constructor () {
        super('Title');
    }

    preload ()
    {
        this.load.image('phasermanlogo', phasermanImg);
    }

    create ()
    {

        // Description text
        this.add.text(10, 10, 'Phaser Man', { font: '16px Courier', fill: '#FFF' });

        const phasermanImg1 = this.add.image(this.scale.width / 2, this.scale.height / 2 - 50, 'phasermanlogo');
        phasermanImg1.setInteractive();
        const fxShadow = phasermanImg1.preFX.addShadow(0, 0, 0.006, 2, 0x333333, 10);

        this.add.tween({
            targets: phasermanImg1,
            scale: 1.05,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fxShadow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })

    }
}

export default Title;
