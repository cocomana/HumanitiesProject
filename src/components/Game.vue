<template>
    <div class="game">
        <div class="text">
            {{ $store.state.storyNode.text }}
        </div>

        <div class="controls">
            <popover name="left"> {{ $store.state.storyNode.left.hint }}</popover>
            <GameButton :button="$store.state.storyNode.left" class="left" v-popover.left="{ name: 'left' }"></GameButton>

            <popover name="right"> {{ $store.state.storyNode.right.hint }}</popover>
            <GameButton :button="$store.state.storyNode.right" class="right" v-popover.right="{ name: 'right' }"></GameButton>
        </div>
    </div>
</template>

<script>
    import GameButton from '../ui/GameButton';

    export default {
        components: {
            GameButton
        }
    }
</script>

<style lang="scss" scoped>
    .game {
        display: flex;
        flex-direction: column;

        .text {
            flex-grow: 7.5;
            height: 65%;
            width: 50%;

            margin: auto;

            color: white;
            text-align: center;
        }

        .controls {
            flex-grow: 5;
            width: 100%;

            margin: auto;

            display: flex;
            flex-direction: row;
        }
    }
</style>
