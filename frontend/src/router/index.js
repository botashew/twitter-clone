import Vue from 'vue'
import VueRouter from 'vue-router'
import Twitter from '../views/Twitter.vue'
import Signup from '../views/signup.vue'
import VueCookie from 'vue-cookie'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Twitter. It\'s what\'s happening',
    component: Twitter,
    meta: {
      isLoggedIn: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/login.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const token = await VueCookie.get('token')

  if(to.meta.requiresAuth && !token){
    router.push({path: '/'})
  }

  if(to.meta.isLoggedIn && token){
    router.push({path: '/home'})
  }

  document.title = to.name + " / Twitter"
  next()
})

export default router
