import Vue from 'vue'
import App from './App.vue'
import { store } from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false



new Vue({
    store,
    render: h => h(App)
}).$mount('#app')