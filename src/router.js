import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pets',
      name: 'pets',
      // route level code-splitting
      // this generates a separate chunk (pets.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "pets" */ './views/Pets.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () =>
        import(/* webpackChunkName: "favorites" */ './views/Favorites.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import(/* webpackChunkName: "form" */ './views/Form.vue')
    }
  ]
})
