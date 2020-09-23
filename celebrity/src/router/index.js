import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import YouTube from "../views/YouTube";
import Instagram from "../views/Instagram";
import TikTok from "../views/TikTok"
import Thirdpartnar from "../views/Thirdpartnar";
import Headhunting from "../views/Headhunting";
import Login from "../views/Login";
import Register from "../views/Register";
import Detail from "../views/Detail";
import Search from "../views/Search";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/youtube",
    name: "YouTube",
    component: YouTube
  },
  {
    path: "/instagram",
    name: "Instagram",
    component: Instagram
  },
  {
    path: "/tiktok",
    name: "TikTok",
    component: TikTok
  },
  {
    path: "/thirdpartnar",
    name: "Thirdpartnar",
    component: Thirdpartnar
  },
  {
    path: "headhunting",
    name: "Headhunting",
    component: Headhunting
  },
  {
    path: "login",
    name: "Login",
    component: Login
  },
  {
    path: "register",
    name: "Register",
    component: Register
  },
  {
    path: "detail",
    name: "Detail",
    component: Detail
  },
  {
    path: "search",
    name: "Search",
    component: Search
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
