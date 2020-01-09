<template>
    <v-navigation-drawer 
        expand-on-hover 
        permanent
        dark
        color="darkgrey"
        class="side-nav"
    >
        <template >
            <v-list>
                <v-list-item style="justify-content:center;">
                    <v-list-item-avatar>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item style="text-align:center;">
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            {{ user.username }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </template>

        <v-divider></v-divider>

        <v-list nav dense>
            <router-link :to="{name: 'dashboard'}">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
            </router-link>

            <router-link :to="{name: 'dashboard.add.team'}">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-account-multiple-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Add Team</v-list-item-title>
                </v-list-item>
            </router-link>
            
            <router-link :to="{name: 'dashboard.view.team'}">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>View Teams</v-list-item-title>
                </v-list-item>
            </router-link>
            
            <router-link :to="{name: 'dashboard.add.player'}">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-football-helmet</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Add Player</v-list-item-title>
                </v-list-item>
            </router-link>
            
            <router-link :to="{name: 'dashboard.view.player'}">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-account-card-details</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>View Players</v-list-item-title>
                </v-list-item>
            </router-link>
            
        </v-list>
    </v-navigation-drawer>
<!--
    <div class="side-nav-container">
        <router-link :to="{name: 'dashboard'}">
            <div class="item">Dashboard</div>
        </router-link>
        <router-link :to="{name: 'dashboard.add.team'}">
            <div class="item">Add team</div>
        </router-link>
        <router-link :to="{name: 'dashboard.view.team'}">
            <div class="item">View teams</div>
        </router-link>
        <router-link :to="{name: 'dashboard.add.player'}">
            <div class="item">Add player</div>
        </router-link>
        <router-link :to="{name: 'dashboard.view.player'}">
            <div class="item">View players</div>
        </router-link>
    </div>
-->
</template>

<script>
export default {
  name: 'DashboardNav',
  computed: {
      user(){
          return this.$store.getters.user
      }
  },
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    
    .v-list-item__avatar{
        margin-right: 0 !important;
    }

    .side-nav{
        float: left;
    }
</style>