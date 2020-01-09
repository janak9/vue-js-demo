<template>
<v-container>
    <v-card>
        <v-form @submit.prevent="add">
            <v-card-title>
                Add Player
            </v-card-title>
            <v-card-text>
                <v-text-field
                    label="Name"
                    name="name"
                    type="text"
                    v-model="playerInfo.name"
                    outlined
                    ></v-text-field>
                    
                <v-select 
                    v-model="playerInfo.team_id" 
                    :items="teams"
                    item-text="name"
                    item-value="_id"
                    :rules="[v => !!v || 'Team is required']"
                    required
                    outlined
                    label="Team"></v-select>

                <v-select 
                    v-model="playerInfo.skill" 
                    :items="skills"
                    :rules="[v => !!v || 'Skill is required']"
                    required
                    outlined
                    label="Skill"></v-select>

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
</template>

<script>
import axios from '../axios'

export default {
    name: "AddPlayer",
    data() {
        return {
            teams: [],
            skills: ['Bowler', 'Batsman', 'WicketKeeper', 'AllRounder'],
            playerInfo: {
                name: "",
                team_id: "",
                skill: ""
            },
            error: ""
        }
    },
    mounted() {
        axios().get("/team/list").then((result) => {
            this.teams = result.data;
        }).catch((err) => {
            console.log(err);
        })
    },
    methods: {
        add(){
            axios().post("/player/create", this.playerInfo).then(() => {
                this.$router.push({ name: "dashboard.view.player" });
            }).catch(error => {
                console.log(error);
                this.error = error.response.data
            } );
        }
    },
}
</script>
