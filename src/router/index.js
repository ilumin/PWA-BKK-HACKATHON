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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/my-trip',
      name: 'MyTrips',
      component: MyTrips
    },
    {
      path: '/trip-detail',
      name: 'TripDetail',
      component: TripDetail
    },
    {
      path: '/manage-trip',
      name: 'ManageTrip',
      component: ManageTrip
    },
    {
      path: '/location-search',
      name: 'LocationSearch',
      component: LocationSearch
    },
    {
      path: '/location-detail',
      name: 'LocationDetail',
      component: LocationDetail
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
