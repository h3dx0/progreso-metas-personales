// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store/'
import * as firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(Vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCn-eFNLCdNguk2kjSRzY7PxYvHOm5V6go',
      authDomain: 'progresometas.firebaseapp.com',
      databaseURL: 'https://progresometas.firebaseio.com',
      projectId: 'progresometas',
      storageBucket: '',
      messagingSenderId: '1097539201644'
    })
  }
})
