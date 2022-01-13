<template>
    <div>
        <h1>Demo</h1>
        <button v-on:click="startGame">Start</button>
        <div id="game"></div>
    </div>
</template>

<script>

import 'phaser'

import { TestScene } from './phaser/scenes/TestScene'

export default {

    name: 'App',

    data() {
        return {

            game: null,

            config: {
                parent: 'game',
                width: 500,
                height: 500,
                scene: TestScene
            }

        }
    },

    methods: {

        startGame() {
            
            if (this.game != null)
                this.game.destroy(true)

            this.game = new Phaser.Game(this.config)

        }

    }

}

</script>