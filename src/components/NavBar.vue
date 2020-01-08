<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <router-link to="/" class="navbar-brand"><img class="logo" alt="Vue logo" src="../assets/logo.png"></router-link>
        <ul class="navbar-nav">
            <template v-if="auth_token">
                <li class="nav-item">
                    <router-link to="/dashboard" class="nav-link">welcome, {{ user.username }}</router-link> 
                </li>
            </template>
            <template v-else>
                <li class="nav-item">
                    <router-link to="/registration" class="nav-link">Registartion</router-link> 
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link> 
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "NavBar",
    computed: {
        ...mapGetters(['auth_token', 'user'])
    }
}
</script>

<style scoped>
    .logo{
        height: 50px;
        width: 50px;
    }
</style>