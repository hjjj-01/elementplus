import { createRouter, createWebHistory } from 'vue-router'

//用来绑定路由路径，名称和组件
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path:'/userlist',
      name:'userlist',
    },
    {
      path:'/powerlist',
      name:'powerlist',
    },
    {
      path:'/poweruser',
      name:'poweruser',
    },
    {
      path:'/shopclass',
      name:'shopclass',
    },
    {
      path:'/shoplist',
      name:'shoplist',
    }
  ],
})

export default router
