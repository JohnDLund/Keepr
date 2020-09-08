import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    publicKeeps: []
  },
  mutations: {

    setPublicKeeps(state, keepsData) {
      state.publicKeeps = keepsData
      console.log(state.publicKeeps)
    },
  },
  actions: {

    async getPublicKeeps({ commit }) {
      try {
        let res = await api.get("keeps")
        console.log("Got all public Keeps", res.data);
        commit("setPublicKeeps", res.data)
      } catch (err) {
        console.error(err)
      }
    },





    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    }
  }
});
