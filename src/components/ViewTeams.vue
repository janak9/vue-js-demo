<template>
  <div>
    <h2>View Teams</h2>
    <template v-if="teams">
        <table border="1" align="center">
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
</template>

<script>
import axios from '../axios'

export default {
  name: 'ViewTeams',
  data() {
      return {
          teams: null,
          loading: false,
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
}
</script>

<style lang="css" scoped>
    
</style>