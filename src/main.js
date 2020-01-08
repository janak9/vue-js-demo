import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import actionTypes from './store/actionTypes'
import axios from './axios'
import vuetify from './plugins/vuetify';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  vuetify,

  mounted() {
    console.log("app mounted");
    let local_token = window.localStorage.auth_token;
    if(local_token){
      this.$store.dispatch(actionTypes.GET_USER, local_token);
    }
  }
}).$mount('#app')
