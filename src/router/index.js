import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ResultPage from '@/components/ResultPage.vue';

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
  {
    path: '/result/:personalityType',
    name: 'Result',
    component: ResultPage,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



export default router;