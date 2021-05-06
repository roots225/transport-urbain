import Vue from 'vue'
import Router from 'vue-router'

// Dashboard Components
import dashboard from '../views/dashboard'

//  Widgets Components
import mainView from '../mainView'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('../views/homepage.vue')
    },
    {
      path: '/admin',
      redirect: '/admin/dashboard',
      component: mainView,
      children: [
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          component: dashboard
        },
        {
          path: '/admin/quartiers',
          name: 'quartiers',
          component: () => import('../views/quartiers/Index.vue')
        },
        {
          path: '/admin/quartiers/nouveau',
          name: 'quartiers.add',
          component: () => import('../views/quartiers/Form.vue')
        },
        {
          path: '/admin/:id/quartiers',
          name: 'quartiers.edit',
          component: () => import('../views/quartiers/Form.vue')
        },
        {
          path: '/admin/transports',
          name: 'transports',
          component: () => import('../views/quartiers/Index.vue')
        },
        {
          path: '/admin/moyens-de-transports',
          name: 'moyens',
          component: () => import('../views/quartiers/Index.vue')
        }
      ]
    },
    {
      path: '*',
      beforeEnter: (to, from, next) => {
        next({name: 'dashboard'})
      }
    }
  ]
})
