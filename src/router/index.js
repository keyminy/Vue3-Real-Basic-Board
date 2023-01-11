import {createRouter,createWebHistory} from 'vue-router';
import Read from '@/components/Read';
import Create from '@/components/Create'
import Detail from '@/components/Detail';

const router = createRouter({
  history : createWebHistory(),
  routes : [
    {
      path : '/',
      name : 'Read',
      component : Read
    },
    {
      path : '/create/:contentId?',
      name : 'Create',
      component : Create
    },
    {
      path : '/detail/:contentId',
      name : 'Detail',
      component : Detail
    }
  ]
});
export default router;