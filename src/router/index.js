import {createRouter,createWebHistory} from 'vue-router';
import Read from '@/components/Read';
import Create from '@/components/Create'

const router = createRouter({
  history : createWebHistory(),
  routes : [
    {
      path : '/',
      name : 'Read',
      component : Read
    },
    {
      path : '/create',
      name : 'Create',
      component : Create
    }
  ]
});

export default router;