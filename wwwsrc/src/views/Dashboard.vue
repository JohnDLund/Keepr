<template>
  <div class="dashboard container-fluid">
    <h1 class="row p-3 justify-content-center">My Vaults</h1>
    <div class="row p-3 justify-content-center">
      <div v-for="vault in vaults" :key="vault.id" class="card m-3 col-3">
        <div class="card-body">
          <h5 class="card-title">{{vault.name}}</h5>
          <p class="card-text">{{vault.description}}</p>
          <button
            class="btn btn-sm btn-primary"
            @click="goToVault(vault.id)"
          >See Keeps in this Vault</button>
        </div>
      </div>
    </div>

    <h1 class="row p-3 justify-content-center">My Keeps</h1>
    <div class="row p-3 justify-content-center">
      <keepCard
        class="m-2"
        v-for="personalKeep in personalKeeps"
        :keepData="personalKeep"
        :key="personalKeep.id"
      />
    </div>
  </div>
</template>

<script>
import keepCard from "../components/keepCard";
export default {
  name: "dashboard",
  mounted() {
    this.$store.dispatch("getMyVaults");
    this.$store.dispatch("getMyKeeps");
  },
  computed: {
    personalKeeps() {
      return this.$store.state.personalKeeps;
    },
    vaults() {
      return this.$store.state.vaults;
    },
  },

  methods: {
    goToVault(vaultId) {
      this.$router.push({ name: "vault", params: { id: vaultId } });
    },
  },

  components: {
    keepCard,
  },
};
</script>

<style></style>
