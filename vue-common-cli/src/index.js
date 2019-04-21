import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './router';
import './common/style/main.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: FLAG == 'dev' ? 'history' : 'hash'
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

if (module.hot) {
    module.hot.accept();
}