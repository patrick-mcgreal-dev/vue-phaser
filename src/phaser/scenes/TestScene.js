export class TestScene extends Phaser.Scene {

    preload() {

        this.load.image('test', 'assets/phaser/test.png')

    }

    create() {

        this.add.text(100, 100, 'Testing', { fill: '#ffffff' })
        this.add.image(100, 200, 'test')

    }

}