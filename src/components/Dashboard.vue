<template>
    <div class="main">
        <DashboardNav />
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import DashboardNav from './DashboardNav';

export default {
  name: 'Dashboard',
  components: {
      DashboardNav
  }
}
</script>

<style lang="css" scoped>
    .main{
        height: 100%;
    }
    .main-content{
      width: 80%;
    }
</style>