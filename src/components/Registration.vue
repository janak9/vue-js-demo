<template>
<div class="row" style="margin-top:40px;">
    <div class="col-lg-3"></div>
    <div class="col-lg-6 login_form" style="padding:50px;">
        <h1>Registration</h1>
        <form @submit.prevent="register">
            <div class="form-group">
                <label>Username:</label>
                <input type="text" class="form-control" v-model="registerInfo.username"/>
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input type="password" class="form-control" v-model="registerInfo.password"/>
            </div>
            <div class="form-group">
                <label>Role:</label>
                <select class="form-control" v-model="registerInfo.role">
                    <option value="team">Team</option>
                    <option value="player">Player</option>
                </select>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary" style="margin-right:20px;">Submit</button>
                <button type="Reset" class="btn btn-primary">Reset</button>
            </div>
            <p style="color:red">{{ registerError }}</p>
        </form>
    </div>
</div>
</template>

<script>
import axios from '../axios'

export default {
    name: "Registration",
    data() {
        return {
            registerInfo: {
                username: "",
                password: "",
                role: ""
            },
            registerError: ""
        }
    },
    methods: {
        register(){
            axios().post("/register", this.registerInfo).then(() => {
                this.$router.push({ name:"login" });
            }).catch(error => {
                console.log(error);
                this.registerError = error.response.data

            } );
        }
    },
}
</script>

<style scoped>
.login_form{
    background-color: #ccc;
}
</style>