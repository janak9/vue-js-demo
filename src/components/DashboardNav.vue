<template>
    <div class="side-nav-container">
        <router-link :to="{name: 'dashboard'}">
            <div class="item">Dashboard</div>
        </router-link>
        <router-link :to="{name: 'dashboard.add.team'}">
            <div class="item">Add team</div>
        </router-link>
        <router-link :to="{name: 'dashboard.view.team'}">
            <div class="item">View teams</div>
        </router-link>
        <router-link :to="{name: 'dashboard.add.player'}">
            <div class="item">Add player</div>
        </router-link>
        <router-link :to="{name: 'dashboard.view.player'}">
            <div class="item">View players</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'DashboardNav',
  computed: {
      user(){
          return this.$store.getters.user
      }
  },
}
</script>

<style scoped>
    .side-nav-container{
        float: left;
        width: 20%;
        height: 100%;
        background-color: gainsboro;
    }
    .item {
        padding: 10px;
    }
</style>