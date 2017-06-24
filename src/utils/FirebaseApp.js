import Firebase from 'firebase'
import { config } from '@/firebase.config'

Firebase.initializeApp(config)

const initializeAuth = new Promise(resolve => {
  // this adds a hook for the initial auth-change event
  Firebase.auth().onAuthStateChanged(user => {
    authService.setUser(user)
    resolve(user)
  })
})

export const db = Firebase.database()

export function getUser () {
  const authUser = Object.keys(window.localStorage).filter(item => {
    return item.startsWith('firebase:authUser')
  })

  return authUser.length > 0 ? JSON.parse(window.localStorage[authUser]) : {}
}

export const authService = {
  user: null,

  isLoggedIn () {
    return initializeAuth.then(user => {
      console.log('initializeAuth:', user)
      return (user && !user.isAnonymous) && this.user
    })
  },

  setUser (user) {
    this.user = user
  },

  logOut () {
    this.setUser(null)
  }
}
