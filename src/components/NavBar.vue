<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
        
            <div class="d-flex align-center">
                <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
                />
            </div>
            <router-link to="/">
            <div class="d-flex align-center">
                Vue Demo
            </div>
        </router-link>

        <v-spacer></v-spacer>
        <template v-if="auth_token != '' && auth_token != 'null'">
            <router-link to="/dashboard">
                <v-btn text>
                    <span class="mr-1">{{ user.username }}</span>
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </router-link> 
            <v-btn text @click='logout()'>
                <span class="mr-1">Logout</span>
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </template>
        <template v-else>
            <router-link to="/registration">
                <v-btn text>
                    <span class="mr-1">Registartion</span>
                    <v-icon>mdi-login</v-icon>
                </v-btn>
            </router-link> 
            <router-link to="/login">
                <v-btn text>
                    <span class="mr-1">Login</span>
                    <v-icon>mdi-login-variant</v-icon>
                </v-btn>
            </router-link>
        </template>
    </v-app-bar>

<!--
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <router-link to="/" class="navbar-brand"><img class="logo" alt="Vue logo" src="../assets/logo.png"></router-link>
        <ul class="navbar-nav">
            <template v-if="auth_token != '' && auth_token != 'null'">
                <li class="nav-item">
                    <router-link to="/dashboard" class="nav-link">welcome, {{ user.username }}</router-link> 
                </li>
                <li class="nav-item">
                    <div @click='logout()' class="nav-link">Logout</div>
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
    -->
</template>

<script>
import { mapGetters } from 'vuex';
import actionTypes from "../store/actionTypes"

export default {
    name: "NavBar",
    computed: {
        ...mapGetters(['auth_token', 'user'])
    },
    methods: {
        logout(){
            this.$store.commit(actionTypes.LOGOUT);
            this.$router.push({ name: 'login' });
        }
    },
}
</script>

<style scoped>
    a{
        color: #fff !important;
        text-decoration: none;
    }
</style>