
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/Home/HomePage.vue';
import FormLogin from '@/pages/Login/FormLogin.vue';
import FormSignup from '@/pages/Signup/FormSignup.vue';

const routes = [
    {path: '/', name: 'Home',component: HomePage, meta: {title: 'Home'}},
    {path: '/login', name: 'Login', component: FormLogin, meta: {title: 'Login'}},
    {path: '/signup', name: 'Signup', component: FormSignup, meta: {title: 'Signup'}}
];

const router = new createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
})

export default router;