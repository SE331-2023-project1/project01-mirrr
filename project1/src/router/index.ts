import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import AdvisorView from '../views/AdvisorView.vue'
import AdvisorDetails from '@/views/event/AdvisorDetails.vue'
import StudentDetails from '@/views/event/StudentDetails.vue'
import CommentView from '@/views/CommentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'student',
      component: StudentView
    },
    {
      path: '/advisor',
      name: 'advisor',
      component: AdvisorView
    },
    {
      path: '/comment',
      name: 'comment',
      component: CommentView
    },
    {
      path: '/advisor/:id',
      name: 'advisor-detail',
      component: AdvisorDetails,
      props: true
    },
    {
      path: '/student/:id',
      name: 'student-detail',
      component: StudentDetails,
      props: true
    }
  ]
})

export default router
