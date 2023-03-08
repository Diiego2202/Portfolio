import { createRouter, createWebHistory} from 'vue-router';
import Home from './views/Home.vue';
import Sobre from './views/Sobre.vue';

const routes = {
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Sobre',
        name: 'Sobre',
        component: Sobre
    }
};

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;