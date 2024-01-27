import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/personality-types',
    name: 'PersonalityTypes',
    component: () => import('@/components/PersonalityTypes.vue')
  },
  {
    path: '/personality-test',
    name: 'PersonalityTest',
    component: () => import('@/components/PersonalityTest.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;