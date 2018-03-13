import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Register from '@/components/register'
import Analytics from '@/utils/analytics'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }

  ]
})

router.afterEach((to, from) => {
  const path = to.path + to.hash
  Analytics.track(path, {
    referrer: document.referrer,
    previous: from.path + from.hash
  })
})

export default router
