<template>
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
</template>

<script>
import axios from '../axios'

export default {
  name: 'ViewPlayers',
  data() {
      return {
          players: null,
          loading: false,
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
  },
}
</script>

<style lang="css" scoped>
    
</style>