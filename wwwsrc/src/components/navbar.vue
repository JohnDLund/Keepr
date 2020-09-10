<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{ name: 'home' }">Keepr</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'dashboard' }"
        >
          <router-link class="nav-link" :to="{ name: 'dashboard' }">My-Dashboard</router-link>
        </li>
        <li class="nav-item dropdown" v-if="$auth.isAuthenticated">
          <a
            class="nav-link dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >My Vaults</a>

          <div class="dropdown-menu bg-secondary">
            <!-- <router-view :key="$route.fullPath"></router-view> -->
            <router-link
              v-for="vault in vaults"
              :key="vault.id"
              class="dropdown-item bg-secondary text-capitalize text-center"
              :to="{ name: 'vault', params: { id: vault.id } }"
            >{{vault.name}}</router-link>
          </div>
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn btn-danger" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

let _api = axios.create({
  baseURL: "https://localhost:5001",
  withCredentials: true,
});
export default {
  name: "Navbar",

  mounted() {
    this.$store.dispatch("getMyVaults");
  },

  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ", this.$auth.user);
      this.$store.dispatch("getMyVaults");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
  computed: {
    vaults() {
      return this.$store.state.vaults;
    },
  },
};
</script>

<style></style>