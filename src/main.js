import Vue from 'vue'
import App from './App.vue'

import VueConfetti from 'vue-confetti';
import VModal from 'vue-js-modal';
import ProgressBar from 'vue-simple-progress';
import Popover from 'vue-js-popover';

import { store } from './store/index';

Vue.use(VueConfetti);
Vue.use(VModal, { dialog: true });
Vue.use(ProgressBar);
Vue.use(Popover);

new Vue({
    render: h => h(App),
    store
}).$mount('#app');
