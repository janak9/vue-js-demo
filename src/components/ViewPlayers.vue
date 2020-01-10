<template>
<v-container>
<v-card>
    <v-data-table
        :headers="headers"
        :items="players"
        multi-sort
        :search="search"
        :loading="loading"
        loading-text="Loading... Please wait"
    >
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title>
                    View Players
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-account-search"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-toolbar-title>
            </v-toolbar>
            <v-dialog v-model="dialog" max-width="500px" persistent>
                <v-card>
                    <v-card-title>
                        <span class="headline">Edit Player</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-text-field 
                                v-model="editedItem.name" 
                                required
                                outlined
                                label="Name"></v-text-field>
                            
                            <v-select 
                                v-model="editedItem.team_id" 
                                :items="teams"
                                item-text="name"
                                item-value="_id"
                                :rules="[v => !!v || 'Team is required']"
                                required
                                outlined
                                label="Team"></v-select>

                            <v-select 
                                v-model="editedItem.skill" 
                                :items="skills"
                                :rules="[v => !!v || 'Skill is required']"
                                required
                                outlined
                                label="Skill"></v-select>

                            <v-alert type="error" border="left" v-if="editError != ''">{{ editError }}</v-alert>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>

        <template v-slot:item.index="{ item }">
            {{ players.indexOf(item) + 1 }}
        </template>

        <template v-slot:item.action="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
                title="Edit"
                >mdi-account-edit</v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
                title="Delete"
                >mdi-delete</v-icon>
        </template>
    </v-data-table>
</v-card>
</v-container>
<!-- 
  <div>
    <h2>View Players</h2>
    <template v-if="players">
        <table border="1" align="center" cellpadding="8">
            <tr>
               <th>No.</th> 
               <th>Name</th> 
               <th>Team Name</th> 
               <th>Skill</th> 
               <th>Created By</th>
               <th>Actions</th>
            </tr>
            <tr v-for="(player, index) in players" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ player.name }}</td>
                <td>{{ player.team_id.name }}</td>
                <td>{{ player.skill }}</td>
                <td>{{ player.created_by.username }}</td>
                <td><button>Edit</button> <button>Delete</button></td>
            </tr>
        </table>
    </template>
    <template v-else>
        <p>No Data Found</p>
    </template>
    <p v-show="loading">loading...</p>
  </div>

-->
</template>

<script>
import axios from '../axios'

export default {
    name: 'ViewPlayers',
    data() {
        return {
            players: [],
            teams: [],
            search: "",
            loading: false,
            dialog: false,
            headers: [
                { text: "No.", value: "index" },
                { text: "Name", value: "name" },
                { text: "Team Name", value: "team_id.name" },
                { text: "Skill", value: "skill" },
                { text: "Created By", value: "created_by.username" },
                { text: "Action", value: "action", sortable: false }
            ],
            skills: ['Bowler', 'Batsman', 'WicketKeeper', 'AllRounder'],
            editedIndex: -1,
            editedId: -1,
            editError: "",
            editedItem: {
                name: "",
                team_id: "",
                skill: ""
            },
            defaultItem: {
                name: "",
                team_id: "",
                skill: ""
            },
        }
    },
    mounted() {
        this.loading = true;
        axios().get("/player/list").then((result) => {
            this.players = result.data;
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            this.loading = false;
        });

        axios().get("/team/list").then((result) => {
            this.teams = result.data;
        }).catch((err) => {
            console.log(err);
        })
    },
    methods: { 
        editItem (item) {
            this.editedId = item._id;
            this.editedIndex = this.players.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            const index = this.players.indexOf(item)
            if(confirm('Are you sure you want to delete this player?')){
                axios().delete("/player/" + item._id).then((result) => {
                    this.players.splice(index, 1);
                }).catch((err) => {
                    alert(err.response.data);    
                });
            } 
        },
        
        close () {
            this.editedItem = Object.assign({}, this.defaultItem);
            this.editedId = -1;
            this.editedIndex = -1;
            this.editError = "";
            this.dialog = false;
        },
        
        save () {
            axios().put("/player/" + this.editedId, this.editedItem).then((result) => {
                console.log(result);
                Object.assign(this.players[this.editedIndex], result.data);
                this.close();
            }).catch( err => this.editError = err.response.data );
        },
    },
}
</script>
