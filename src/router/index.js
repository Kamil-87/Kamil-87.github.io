import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import("@/views/Home"),
    },
    {
      path: '/post/:id',
      name: 'post',
      meta: {layout: 'main'},
      component: () => import("@/views/Post"),
    },
    {
      path: "/auth",
      name: "auth",
      meta: {layout: 'empty'},
      component: () => import("@/views/Login")
    },
    {
      path: "/profile",
      name: "profile",
      meta: {layout: 'main'},
      component: () => import("@/views/Profile")
    },
  ]
});

