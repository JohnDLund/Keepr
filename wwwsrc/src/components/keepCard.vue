<template>
  <div
    class="card p-2 shadow border border-dark"
    style="width: 18rem;"
    @click="makeActiveKeep(keepData.id), moveToKeepDetails(keepData.id)"
  >
    <img :src="keepData.img" class="card-img-top" alt="Keep Image..." />
    <div class="card-body">
      <h5 class="card-title">{{keepData.name}}</h5>
      <p class="card-text">{{keepData.description}}</p>
      <div class="col-12 d-flex justify-content-between">
        <i class="fa fa-eye p-3">&nbsp{{keepData.views}}</i>
        <i class="fa fa-floppy-o p-3">&nbsp{{keepData.keeps}}</i>
        <i class="fa fa-share-alt p-3">&nbsp{{keepData.shares}}</i>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "keepCard",
  props: ["keepData"],
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    makeActiveKeep(keepId) {
      this.$store.dispatch("getActiveKeep", keepId);
      console.log(keepId);
    },
    moveToKeepDetails(keepId) {
      this.$router.push({ name: "keepDetails", params: { id: keepId } });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>