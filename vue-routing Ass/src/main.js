// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router';

import routes from './routes.js';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
