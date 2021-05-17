import Vue from 'vue'
import firebase from 'firebase'
import { firebaseConfig } from '@/.env'

const app = firebase.initializeApp(firebaseConfig)

export default {
  install: () => {
    Vue.prototype.$firebase = app
    Vue.$firebase = app
  }
}
