import Vue from 'vue';
import Vuex from 'vuex';
import { story }  from '../story';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        storyNode: story.nodes.find(v => v.id === 0),
        influence: 25,
        support: 30,

        stats: {
            green: 0,
            red: 0
        }
    },
    mutations: {
        green (state) {
            state.green++;
        },

        red (state) {
            state.red++;
        },

        addInfluence (state) {
            state.influence += Math.floor(Math.random() * 9);

            if(state.influence > 100) state.influence = 100;
        },

        removeInfluence (state) {
            state.influence -= Math.floor(Math.random() * 9);

            if(state.influence < 0) state.influence = 0;
        },

        toNode (state, newNode) {
            state.storyNode = story.nodes.find(v => v.id === newNode);

            if(state.storyNode.id !== 0) {
                state.storyNode.left.color = (Math.floor(Math.random() * 10) % 2 ? 'red' : 'green');
                state.storyNode.right.color = (Math.floor(Math.random() * 10) % 2 ? 'red' : 'green');
            }
        }
    }
});
