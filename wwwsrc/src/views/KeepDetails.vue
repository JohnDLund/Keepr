<template>
  <div class="keepDetails container-fluid">
    <div class="row align-items-center">
      <div class="col-8 d-flex justify-content-end">
        <div class="card p-2 shadow border border-dark" style="width: 30rem">
          <img :src="activeKeep.img" class="card-img-top" alt="Keep Image..." />
          <div class="card-body">
            <h5 class="card-title">{{ activeKeep.name }}</h5>
            <p class="card-text">{{ activeKeep.description }}</p>
            <div class="col-12 d-flex justify-content-between">
              <i class="fa fa-eye p-3">&nbsp;{{ activeKeep.views }}</i>
              <i class="fa fa-floppy-o p-3">&nbsp;{{ activeKeep.keeps }}</i>
              <i class="fa fa-share-alt p-3">&nbsp;{{ activeKeep.shares }}</i>
            </div>
            <div class="row justify-content-between px-3 pt-2">
              <button
                class="btn btn-sm btn-danger shadow"
                v-if="activeKeep.userId == userId"
                @click="deleteKeep(activeKeep.id)"
              >
                Delete
              </button>
              <i v-if="activeKeep.isPrivate" class="fa fa-lock"
                >&nbsp; Private</i
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 d-flex justify-content-start">
        <div class="btn-group">
          <div class="btn-group">
            <a
              class="btn btn-secondary btn-lg dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >+ Add this Keep to a Vault</a
            >
            <div class="dropdown-menu bg-secondary shadow">
              <a
                v-for="vault in vaults"
                :key="vault.id"
                href="#"
                class="dropdown-item bg-secondary text-capitalize text-center"
                @click="addToVault(vault.id)"
                >{{ vault.name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "keepDetails",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store.state.activeKeep);
  },
  computed: {
    userId() {
      this.$store.dispatch("getUserId");
      return this.$store.state.userId;
    },

    activeKeep() {
      return this.$store.state.activeKeep;
    },

    vaults() {
      return this.$store.state.vaults;
    },
  },
  methods: {
    addToVault(vaultId) {
      this.$store.dispatch("addToVault", {
        keepId: this.activeKeep.id,
        vaultId: vaultId,
      });
      this.$router.push({ name: "vault", params: { id: vaultId } });
    },
    deleteKeep(keepId) {
      this.$store.dispatch("deleteKeep", keepId);
      this.$router.push({ name: "dashboard" });
    },
  },
  beforeDestroy() {
    this.$store.state.activeKeep = {};
  },
  components: {},
};
</script>


<style scoped>
</style>