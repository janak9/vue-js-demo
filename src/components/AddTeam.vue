<template>
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
</template>

<script>
import axios from '../axios'

export default {
    name: "Registration",
    data() {
        return {
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
            axios().post("/team/create", this.teamInfo).then(() => {
                this.$router.push({ name: "dashboard.view.team" });
            }).catch(error => {
                console.log(error);
                this.error = error.response.data
            } );
        }
    },
}
</script>

<style scoped>

</style>