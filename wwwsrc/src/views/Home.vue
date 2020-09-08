<template>
  <div class="home">
    <div v-for="publicKeep in publicKeeps" :publicKeepData="publicKeep" :key="publicKeep.id">
      <div>{{publicKeep.name}}</div>
      <div>{{publicKeep.description}}</div>
      <div>{{publicKeep.views}}</div>
      <div>{{publicKeep.keeps}}</div>
      <img :src="publicKeep.img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getPublicKeeps");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },

    publicKeeps() {
      return this.$store.state.publicKeeps;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
