<template>
<v-container>
    <v-card>
        <v-form @submit.prevent="add" ref="add_team">
            <v-card-title>
                Add Team
            </v-card-title>
            <v-card-text>
                <v-text-field
                    label="Name"
                    name="name"
                    type="text"
                    v-model="teamInfo.name"
                    :rules="nameRule"
                    :counter="20"
                    outlined
                    ></v-text-field>

                <v-text-field
                    label="Logo"
                    name="logo"
                    v-model="teamInfo.logo"
                    outlined
                    ></v-text-field>

                <v-text-field
                    label="Tag Line"
                    name="tag_line"
                    v-model="teamInfo.tag_line"
                    outlined
                    ></v-text-field>
                <v-alert type="error" v-if="error != ''">{{ error }}</v-alert>
            </v-card-text>
            <v-card-actions>
                <v-btn 
                    color="primary"
                    outlined
                    type="submit"
                    >Save</v-btn>
                <v-btn 
                    color="error"
                    outlined
                    type="reset"
                    >Reset</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</v-container>
<!--
<div class="row">
    <div class="col-lg-12 login_form" style="padding:50px;">
        <h1>Add Team</h1>
        <form @submit.prevent="add">
            <div class="form-group">
                <label>Name:</label>
                <input type="text" class="form-control" v-model="teamInfo.name"/>
            </div>
            <div class="form-group">
                <label>Logo:</label>
                <input type="text" class="form-control" v-model="teamInfo.logo"/>
            </div>
            <div class="form-group">
                <label>Tag Line:</label>
                <input type="text" class="form-control" v-model="teamInfo.tag_line"/>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary" style="margin-right:20px;">Submit</button>
                <button type="Reset" class="btn btn-primary">Reset</button>
            </div>
            <p style="color:red">{{ error }}</p>
        </form>
    </div>
</div>
-->
</template>

<script>
import axios from '../axios'

export default {
    name: "AddTeam",
    data() {
        return {
            nameRule: [ 
                v => !!v || 'Name is required', // !!v for convert value to the true false only v return value so !! will convert it to boolean
                v => (v && v.length <= 20) || 'Name must be less than or equal to 20 characters'
            ],
            teamInfo: {
                name: "",
                logo: "",
                tag_line: ""
            },
            error: ""
        }
    },
    methods: {
        add(){
            if(this.$refs.add_team.validate()){
                axios().post("/team/create", this.teamInfo).then(() => {
                    this.$router.push({ name: "dashboard.view.team" });
                }).catch(error => {
                    console.log(error);
                    this.error = error.response.data
                });   
            }
        }
    },
}
</script>
