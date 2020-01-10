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
                <v-form @submit.prevent="register" ref="register_form">
                    <v-toolbar
                        color="primary"
                        dark
                        flat
                    >
                        <v-toolbar-title>Registration</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                            <v-text-field
                                label="Username"
                                name="username"
                                type="text"
                                v-model="registerInfo.username"
                                outlined
                                :rules="[v => !!v || 'Username is required']"
                            ></v-text-field>
                            
                            <v-text-field
                                label="Password"
                                name="password"
                                type="password"
                                v-model="registerInfo.password"
                                outlined
                                :rules="[v => !!v || 'Password is required']"
                            ></v-text-field>

                            <v-select
                                v-model="registerInfo.role"
                                :items="roles"
                                :rules="[v => !!v || 'Role is required']"
                                label="Role"
                                required
                                outlined
                            ></v-select>
                    </v-card-text>
                    <v-card-text v-if="registerError != ''">
                        <v-alert type="error" border="left">
                            {{ registerError }}
                        </v-alert>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                            color="primary"
                            type="submit"
                        >Submit</v-btn>
                        <v-btn
                            color="error"
                            class="mr-4"
                            @click="reset"
                        >Reset</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
<!--
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
-->
</template>

<script>
import axios from '../axios'
import actionTypes from '../store/actionTypes'

export default {
    name: "Registration",
    data() {
        return {
            roles: ['team', 'player'],
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
            if(this.$refs.register_form.validate()){    
                this.$store.dispatch(actionTypes.REGISTER, this.registerInfo)
                    .then( () => this.$router.push({ name:"dashboard" }) )
                    .catch( error => this.registerError = error.response.data );
            }
        },

        reset(){
            this.registerInfo = {
                username: "",
                password: "",
                role: ""
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