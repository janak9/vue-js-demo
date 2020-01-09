<template>    
<v-container>
<v-card>
    <v-data-table
        :headers="headers"
        :items="teams"
        multi-sort
        :search="search"
        :loading="loading"
        loading-text="Loading... Please wait"
    >
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title>
                    View Teams
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
                        <span class="headline">Edit Team</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-text-field 
                                v-model="editedItem.name" 
                                required
                                outlined
                                label="Name"></v-text-field>
                            
                            <v-text-field 
                                v-model="editedItem.logo"
                                outlined
                                label="Logo"></v-text-field>

                            <v-text-field 
                                v-model="editedItem.tag_line" 
                                outlined
                                label="Tag Line"></v-text-field>

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
            {{ teams.indexOf(item) + 1 }}
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
    <h2>View Teams</h2>
    <template v-if="teams">
        <table border="1" align="center" cellpadding="8">
            <tr>
               <th>No.</th> 
               <th>Name</th> 
               <th>Logo</th> 
               <th>Tag Line</th> 
               <th>Created By</th>
               <th>Actions</th>
            </tr>
            <tr v-for="(team, index) in teams" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ team.name }}</td>
                <td>{{ team.logo }}</td>
                <td>{{ team.tag_line }}</td>
                <td>{{ team.created_by.username }}</td>
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
  name: 'ViewTeams',
  data() {
        return {
            teams: [],
            loading: false,
            dialog: false,
            search: '',
            headers: [
                { text: "No.", value: "index" },
                { text: "Name", value: "name" },
                { text: "Logo", value: "logo" },
                { text: "Tag Line", value: "tag_line" },
                { text: "Created By", value: "created_by.username" },
                { text: "Action", value: "action", sortable: false }
            ],
            editedIndex: -1,
            editedId: -1,
            editError: "",
            editedItem: {
                name: "",
                logo: "",
                tag_line: ""
            },
            defaultItem: {
                name: "",
                logo: "",
                tag_line: ""
            },
        }
    },
    mounted() {
        this.loading = true;
        axios().get("/team/list").then((result) => {
            this.teams = result.data;
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            this.loading = false;
        });
    },
    methods: { 
        editItem (item) {
            this.editedId = item._id;
            this.editedIndex = this.teams.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            const index = this.teams.indexOf(item)
            if(confirm('Are you sure you want to delete this team?')){
                axios().delete("/team/" + item._id).then((result) => {
                    this.teams.splice(index, 1);
                }).catch((err) => {
                    alert("something was wrong!");    
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
            axios().put("/team/" + this.editedId, this.editedItem).then((result) => {
                console.log(result);
                Object.assign(this.teams[this.editedIndex], result.data);
                this.close();
            }).catch( err => this.editError = err.response.data );
        },
    },
}
</script>
