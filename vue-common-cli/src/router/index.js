// import Page1 from '../components/page1.vue';
// import Page2 from '../components/page2.vue';

export const routes = [
    {
        path: '/',
        name: 'page1',
        component: () => import('../components/page1.vue'),
        // component: Page1,
        meta:{
            keepAlive: true
        }
    },
    {
        path: '/page2',
        name: 'page2',
        component: () => import('../components/page2.vue'),
        // component: Page2,
        meta:{
            keepAlive: true
        }
    }
]