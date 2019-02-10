<template>
    <div class="panel">

        <div v-if="side === 'left'" class="left">

        </div>

        <div v-if="side === 'right'" class="right">
            <progress-bar class="pg" text-fg-color="white" :val="$store.state.influence" text="Political Influence"></progress-bar>
            <progress-bar class="pg" text-fg-color="white" :val="$store.state.support" text="Party Support"></progress-bar>
        </div>

    </div>
</template>

<script>
    import ProgressBar from 'vue-simple-progress';

    export default {
        props: {
            side: {
                type: String,
                default: 'left'
            }
        },
        components: {
            ProgressBar
        }
    }
</script>

<style lang="scss" scoped>
    .panel {
        color: white;

        div {
            .pg {
                margin-bottom: 1em;
                padding: 0.5em;
            }
        }
    }
</style>
