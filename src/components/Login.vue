<template>
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
            this.$store.dispatch(actionTypes.LOGIN, this.loginInfo)
                    .then(() => this.$router.push({ name:"dashboard" }))
                    .catch(error => this.loginError = error.response.data);
        }
    },
}
</script>

<style scoped>
.login_form{
    background-color: #ccc;
}
</style>