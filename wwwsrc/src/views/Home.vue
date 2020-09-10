<template>
  <div class="home container-fluid">
    <div class="row p-3">
      <keepCard
        class="m-2"
        v-for="publicKeep in publicKeeps"
        :keepData="publicKeep"
        :key="publicKeep.id"
      />
    </div>
  </div>
</template>

<script>
import keepCard from "../components/keepCard";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getMyVaults");
    this.$store.dispatch("getPublicKeeps");
  },
  computed: {
    publicKeeps() {
      return this.$store.state.publicKeeps;
    },
    vaults() {
      return this.$store.state.vaults;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  components: {
    keepCard,
  },
};
</script>
