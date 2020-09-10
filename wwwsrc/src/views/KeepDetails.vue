<template>
  <div class="keepDetails container-fluid">
    <div class="row align-items-center">
      <div class="col-8 d-flex justify-content-end">
        <div class="card p-2 shadow border border-dark" style="width: 40rem;">
          <img :src="activeKeep.img" class="card-img-top" alt="Keep Image..." />
          <div class="card-body">
            <h5 class="card-title">{{activeKeep.name}}</h5>
            <p class="card-text">{{activeKeep.description}}</p>
            <div class="col-12 d-flex justify-content-between">
              <i class="fa fa-eye p-3">&nbsp{{activeKeep.views}}</i>
              <i class="fa fa-floppy-o p-3">&nbsp{{activeKeep.keeps}}</i>
              <i class="fa fa-share-alt p-3">&nbsp{{activeKeep.shares}}</i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 d-flex justify-content-start">
        <div class="btn-group">
          <div class="btn-group">
            <button
              class="btn btn-secondary btn-lg dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >+ Add this Keep to a Vault</button>
            <div class="dropdown-menu bg-secondary">
              <div
                v-for="vault in vaults"
                :key="vault.id"
                class="dropdown-item bg-secondary text-capitalize text-center"
                @click="addToVault(vault.id)"
              >{{vault.name}}</div>
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
    },
  },
  components: {},
};
</script>


<style scoped>
</style>