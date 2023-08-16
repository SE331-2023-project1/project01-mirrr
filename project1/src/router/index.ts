import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import AdvisorView from '../views/AdvisorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'student',
      component: StudentView
    },
    {
      path: '/about',
      name: 'about',
      component: AdvisorView
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('../views/CommentForm.vue')
    }
  ]
})

export default router
