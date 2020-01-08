<template>
  <div>
    <h2>hello, {{ user.username }}</h2>
    <p>This is Dashboard Home</p>
  </div>
</template>

<script>
export default {
  name: 'DashboardHome',
  computed: {
      user(){
          return this.$store.getters.user
      }
  },
}
</script>

<style lang="css" scoped>
    
</style>