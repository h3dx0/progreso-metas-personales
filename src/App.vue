<template>
  <v-app light>
    <v-navigation-drawer
      v-model="sideNav"
      overflow
      absolute>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="userIsAuthenticated">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar  dark color="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Progreso Metas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title">{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          { icon: 'face', title: 'Metas Rezagadas', link: '/metas-rezagadas' },
          { icon: 'lock_open', title: 'Metas Proactivas', link: '/metas-proactivas' },
          { icon: 'stats', title: 'Metas Reporte', link: '/reporte' }
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            { icon: 'supervisor_account', title: 'View meetups', link: '/meetups' },
            { icon: 'room', title: 'Organize meetup', link: '/meetups/new' },
            { icon: 'person', title: 'Profile', link: '/user/profile' }
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
//        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        return false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
