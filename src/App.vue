<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import actionTypes from './store/actionTypes'

export default {
  name: 'app',
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.row{
  margin: 0;
}
</style>
