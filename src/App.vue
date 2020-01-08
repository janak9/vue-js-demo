<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import actionTypes from './store/actionTypes'

export default {
  name: 'App',

  components: {
    NavBar,
  },
  mounted() {
    console.log("app mounted");
    let local_token = window.localStorage.auth_token;
    if(local_token){
      this.$store.dispatch(actionTypes.GET_USER, local_token)
    }
  },
}
</script>

