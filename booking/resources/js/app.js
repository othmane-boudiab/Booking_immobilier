require('./bootstrap');

import Vue from 'vue'

import VueRouter from 'vue-router'

import routes from './routes'
import App from './app.vue'
Vue.use(VueRouter);

// Vue.component('about-us', require('./components/AboutComponent.vue').default);

// // creating a vue instance
new Vue({
    render : h => h(App),
    router: new VueRouter(routes)
}).$mount('#app')
