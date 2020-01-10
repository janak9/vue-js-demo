<template>
    <v-layout
        align-center
        justify-center
        mt-12
    >
        <v-flex
            xs12
            sm8
            md4
        >
            <v-card class="elevation-12">
                <v-form @submit.prevent="login" ref="login_form">
                    <v-toolbar
                        color="primary"
                        dark
                        flat
                    >
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                            <v-text-field
                                label="Username"
                                name="username"
                                type="text"
                                v-model="loginInfo.username"
                                :rules="[v => !!v || 'Username is required']"
                                outlined
                            ></v-text-field>
                            
                            <v-text-field
                                label="Password"
                                name="password"
                                type="password"
                                v-model="loginInfo.password"
                                :rules="[v => !!v || 'Password is required']"
                                outlined
                            ></v-text-field>
                    </v-card-text>
                    <v-card-text v-if="loginError != ''">
                        <v-alert type="error" border="left">
                            {{ loginError }}
                        </v-alert>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                            color="primary"
                            type="submit"
                        >Login</v-btn>
                        <v-btn
                            color="error"
                            class="mr-4"
                            type="reset"
                        >Reset</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
<!---
<div class="row" style="margin-top:40px;">
    <div class="col-lg-3"></div>
    <div class="col-lg-6 login_form" style="padding:50px;">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <label>Username:</label>
                <input type="text" class="form-control" v-model="loginInfo.username" />
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input type="password" class="form-control" v-model="loginInfo.password"/>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary" style="margin-right:20px;" >Submit</button>
                <button type="Reset" class="btn btn-primary">Reset</button>
            </div>
            <p style="color:red">{{ loginError }}</p>
        </form>
    </div>
</div>
-->
</template>

<script>
import actionTypes from '../store/actionTypes'

export default {
    name: "Login",
    data() {
        return {
            loginInfo : {
                username: "",
                password: ""
            },
            loginError: ""
        }
    },
    methods: {
        login(){
            if(this.$refs.login_form.validate()){
                this.$store.dispatch(actionTypes.LOGIN, this.loginInfo)
                        .then(() => this.$router.push({ name:"dashboard" }))
                        .catch(error => this.loginError = error.response.data);           
            }
        }
    },
}
</script>

<style scoped>
.login_form{
    background-color: #ccc;
}
</style>