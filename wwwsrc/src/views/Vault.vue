<template>
  <div class="vault container-fluid">
    <div class="row p-3">
      <keepCard
        class="m-2"
        v-for="vaultKeep in vaultKeeps"
        :keepData="vaultKeep"
        :key="vaultKeep.vaultKeepId"
      />
    </div>
  </div>
</template>

<script>
import keepCard from "../components/keepCard";

export default {
  name: "vault",
  mounted() {
    this.$store.dispatch("getVaultById", this.$route.params.id);
    this.$store.dispatch("getVaultKeeps", this.$route.params.id);
  },
  computed: {
    vaultKeeps() {
      return this.$store.state.vaultKeeps;
    },
  },
  methods: {},
  components: {
    keepCard,
  },
};
</script>