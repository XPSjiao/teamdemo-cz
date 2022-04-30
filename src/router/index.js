import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from "../views/TodoList.vue";

const News = () => import('../components/News.vue');
const AllNews =() => import("../views/jhx/news/AllNews.vue");
const CountrySideNews =() => import("../views/jhx/news/CountrySideNews.vue");
const WorldNews =() => import("../views/jhx/news/WorldNews.vue");
const SocietyNews =() => import("../views/jhx/news/SocietyNews.vue");
const RulawNews =() => import("../views/jhx/news/RulawNews.vue");
const MyArea =() => import("../views/jhx/area/MyArea.vue");



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'wx',
    component: () => import('../views/wx/wxDemo.vue')
  },
  {
    path: '/jhx',
    name: 'jhxDemo',
    component: () => import('../views/jhx/jhxDemo.vue'),
    children:[
      {
        path: "myarea",
        name:"MyArea",
        component: MyArea,
      },
      {
        path: "news",
        name:"news",
        component: News,
        children:[
          {
            path: "",
            component: AllNews
          },
          {
            path: "/allNews",
            component: AllNews
          },
          {
            path: "/countrySideNews",
            component: CountrySideNews
          },
          {
            path: "/WorldNews",
            component: WorldNews
          },
          {
            path: "/SocietyNews",
            name:"SocietyNews",
            component: SocietyNews
          },
          {
            path: "/RulawNews",
            name:"RulawNews",
            component: RulawNews
          },
        ]
      },
    ]
  },
  {
    path: '/ly',
    name: 'lyDemo',
    component: () => import('../views/ly/lyDemo.vue')
  },
  {
    path: '/wl',
    name: 'wlDemo',
    component: () => import('../views/wl/wlDemo.vue')
  },
  {
    path: '/wx',
    name: 'wxDemo',
    component: () => import('../views/wx/wxDemo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
