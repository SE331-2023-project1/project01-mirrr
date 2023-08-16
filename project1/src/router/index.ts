import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import AboutView from '../views/AboutView.vue'

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
      component: AboutView
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('../views/CommentForm.vue')
    }
  ]
})

export default router
