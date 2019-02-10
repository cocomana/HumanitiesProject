<template>
    <div id="app">

        <modal name="settings">
            <div class="settings-window">
                <button @click="newGame">New Game</button>
            </div>
        </modal>

        <div class="title-bar">
            <div @click="openSettings" class="settings">Settings</div>
        </div>

        <div class="game-container">
            <div class="game-viewport">
                <Panel side="left"></Panel>

                <Game></Game>

                <Panel side="right"></Panel>
            </div>
        </div>

    </div>
</template>

<script>
    import Game from './components/Game';
    import Panel from './components/Panel';

    export default {
        name: 'app',
        components: {
            Game, Panel
        },
        methods: {
            openSettings() {
                this.$modal.show('settings');
            },
            newGame() {
                this.$store.commit('toNode', 0);
            }
        },
        mounted() {
            const gameState = JSON.parse(localStorage.getItem('game'));
            if (gameState) {
                this.$store.commit('toNode', gameState.id);

                this.$store.influence = gameState.influence;
                this.$store.support = gameState.support;

                this.$store.state.storyNode.left.color = gameState.left;
                this.$store.state.storyNode.right.color = gameState.right;
            }

            this.$store.subscribe((mutation, state) => {
                localStorage.setItem('game', JSON.stringify(
                    {
                        influence: this.$store.state.influence,
                        support: this.$store.state.support,

                        left: this.$store.state.storyNode.left.color,
                        right: this.$store.state.storyNode.right.color,

                        id: this.$store.state.storyNode.id
                    }
                ));
            });
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    html, body {
        margin: 0;
        background: black;
        height: 100%;
        width: 100%;

        font-family: 'Roboto', sans-serif;
    }

    #app {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .title-bar {
            height: 3em;
            line-height: 3em;
            width: 100%;

            .settings {
                color: white;
                width: 5em;
                margin-right: 2em;
                text-align: center;
                cursor: pointer;
                user-select: none;
                float: right;
            }
        }

        .game-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .game-viewport {
                display: flex;
                flex-direction: row;
                width: 60%;
                height: 50%;

                .panel {
                    flex-grow: 3;
                    height: 100%;
                }

                .game {
                    flex-grow: 10;
                    height: 100%;
                }
            }
        }
    }
</style>
