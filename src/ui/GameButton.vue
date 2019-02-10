<template>
    <div @click="click" :style="{ background: button.color }" class="game-button">
        {{ button.text }}

        <v-dialog class="dialog"/>
    </div>
</template>

<script>
    export default {
        props: {
            button: {
                type: Object,
                default() {
                    return {
                        text: 'Button',
                        color: 'green'
                    };
                }
            }
        },
        methods: {
            click() {
                // Call extra if there is one
                this.button.extra();

                // Chance to change influence
                if (Math.random() < .40) {
                    if (this.color === 'green') {
                        this.$store.commit('addInfluence');
                    } else {
                        this.$store.commit('removeInfluence');
                    }
                }

                // Chance to drop confetti (10%)
                if (Math.random() < .15 && this.color === 'green') {
                    this.$confetti.start();
                    setTimeout(() => {this.$confetti.stop()}, 3000);
                }

                // Chance to question decision (20%)
                if (Math.random() < .20 && this.color === 'red') {
                    this.$modal.show('dialog', {
                        title: 'Are you sure?',
                        text: 'Choosing this action will have serious consequences.',
                        buttons: [
                            {
                                title: 'Yes',
                                handler: () => {
                                    this.$store.commit('removeInfluence');
                                    this.$modal.hide('dialog');
                                }
                            },
                            {
                                title: 'No',
                                default: true,
                                handler: () => {
                                    this.$modal.hide('dialog');
                                }
                            }
                        ]
                    });
                }

                // Go to next node and store statistics
                this.$store.commit('toNode', this.button.toNode);
                this.$store.commit(this.color);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .game-button {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        user-select: none;
        font-size: 18px;
        color: white;

        .dialog {
            color: black;
        }
    }
</style>
