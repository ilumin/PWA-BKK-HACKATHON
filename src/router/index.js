import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Profile from '@/components/Profile'
import Login from '@/views/Login'
import MyTrips from '@/views/MyTrips'
import TripDetail from '@/views/TripDetail'
import ManageTrip from '@/views/ManageTrip'
import LocationSearch from '@/views/LocationSearch'
import LocationDetail from '@/views/LocationDetail'

import { authService } from '@/utils/FirebaseApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: loginRequired
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/my-trip',
      name: 'MyTrips',
      component: MyTrips,
      beforeEnter: loginRequired
    },
    {
      path: '/trip-detail',
      name: 'TripDetail',
      component: TripDetail,
      beforeEnter: loginRequired
    },
    {
      path: '/manage-trip',
      name: 'ManageTrip',
      component: ManageTrip,
      beforeEnter: loginRequired
    },
    {
      path: '/location-search',
      name: 'LocationSearch',
      component: LocationSearch,
      beforeEnter: loginRequired
    },
    {
      path: '/location-detail',
      name: 'LocationDetail',
      component: LocationDetail,
      beforeEnter: loginRequired
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: loginRequired
    }
  ]
})

function loginRequired (to, from, next) {
  authService.isLoggedIn().then(user => {
    next(user ? '/login' : '')
  })
}
