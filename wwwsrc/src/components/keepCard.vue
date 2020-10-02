<template>
  <div class="card p-2 bg-info borderTrim rounded" style="width: 18rem">
    <img
      style="object-fit: contain; width: 100%; max-height: 200px"
      :src="keepData.img"
      class="card-img-top"
      alt="Keep Image..."
      @click="makeActiveKeep(keepData.id), moveToKeepDetails(keepData.id)"
    />
    <div class="card-body">
      <h5 class="card-title">{{ keepData.name }}</h5>
      <p class="card-text">{{ keepData.description }}</p>

      <div class="col-12 d-flex justify-content-between">
        <i class="fa fa-eye p-3">&nbsp;{{ keepData.views }}</i>
        <i class="fa fa-floppy-o p-3">&nbsp;{{ keepData.keeps }}</i>
        <i class="fa fa-share-alt p-3" @click="editKeep"
          >&nbsp;{{ keepData.shares }}</i
        >
      </div>
      <div class="row justify-content-between px-3 pt-2">
        <button
          class="btn btn-sm btn-warning shadow"
          @click="deleteKeep(keepData.id)"
          v-if="keepData.userId == userId"
        >
          Delete
        </button>
        <button
          class="btn btn-sm btn-danger shadow"
          @click="deleteVaultKeepRelationship"
          v-if="vaultKeepRelationshipData"
        >
          Delete From Vault
        </button>
        <i v-if="keepData.isPrivate" class="fa fa-lock">&nbsp; Private</i>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "keepCard",
  props: ["keepData", "vaultKeepRelationshipData"],
  data() {
    return {};
  },
  mounted() {},
  computed: {
    userId() {
      this.$store.dispatch("getUserId");
      return this.$store.state.userId;
    },
  },
  methods: {
    makeActiveKeep(keepId) {
      this.$store.dispatch("getActiveKeep", keepId);
      console.log(keepId);
    },
    moveToKeepDetails(keepId) {
      this.$router.push({ name: "keepDetails", params: { id: keepId } });
    },
    deleteKeep(keepId) {
      this.$store.dispatch("deleteKeep", keepId);
    },
    editKeep() {
      this.$store.dispatch("editKeep", {
        id: this.keepData.id,
        Shares: this.keepData.shares + 1,
        Img: this.keepData.img,
        Description: this.keepData.description,
        Name: this.keepData.name,
        UserId: this.keepData.userId,
      });
    },

    deleteVaultKeepRelationship(keepId) {
      this.$store.dispatch(
        "deleteVaultKeepRelationship",
        this.vaultKeepRelationshipData
      );
    },
  },
  components: {},
};
</script>


<style scoped>
.borderTrim {
  -webkit-box-shadow: 0px 0px 5px 5px #fca311ff;
  box-shadow: 0px 0px 5px 5px #fca311ff;
  border: solid thick #000000ff;
}

.borderTrim:hover {
  -webkit-box-shadow: 0px 0px 5px 5px #000000ff;
  box-shadow: 0px 0px 5px 5px #000000ff;
  border: solid thick #fca311ff;
  transition: 0.4s;
}
</style>