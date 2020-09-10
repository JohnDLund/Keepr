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
    publicKeeps: [],
    activeKeep: {},
    personalKeeps: [],
    vaults: [],
    activeVault: {},
    vaultKeeps: []
  },


  mutations: {

    setPublicKeeps(state, keepsData) {
      state.publicKeeps = keepsData
    },
    setActiveKeep(state, keepData) {
      state.activeKeep = keepData
    },
    setPersonalKeeps(state, keepData) {
      state.personalKeeps = keepData
    },
    setMyVaults(state, vaultData) {
      state.vaults = vaultData
    },
    setActiveVault(state, vaultData) {
      state.activeVaults = vaultData
    },
    setVaultKeeps(state, vaultKeepData) {
      state.vaultKeeps = vaultKeepData
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

    async getActiveKeep({ commit }, keepId) {
      try {
        let res = await api.get("keeps/" + keepId)
        console.log("Got the Active Keep", res.data);
        commit("setActiveKeep", res.data)
      } catch (err) {
        console.error(err)
      }
    },

    async getMyKeeps({ commit }) {
      try {
        let res = await api.get("keeps/" + "user")
        console.log("Got your personal Keeps", res.data);
        commit("setPersonalKeeps", res.data)
      } catch (err) {
        console.error(err)
      }
    },

    async getActiveKeep({ commit }, keepId) {
      try {
        let res = await api.get("keeps/" + keepId)
        console.log("Got the Active Keep", res.data);
        commit("setActiveKeep", res.data)
      } catch (err) {
        console.error(err)
      }
    },

    async getMyVaults({ commit }) {
      try {
        let res = await api.get("vaults/" + "user")
        console.log("Got Your Vaults", res.data);
        commit("setMyVaults", res.data)
      } catch (err) {
        console.error(err)
      }
    },

    async getVaultById({ commit }, vaultId) {
      try {
        let res = await api.get("vaults/" + vaultId)
        console.log("Got the Vault by ID", res.data);
        commit("setActiveVault", res.data)
      } catch (err) {
        console.error(err)
      }
    },


    async getVaultKeeps({ commit }, vaultId) {
      try {
        let res = await api.get("vaults/" + vaultId + "/keeps")
        console.log("Got the VaultKeeps", res.data);
        commit("setVaultKeeps", res.data)
      } catch (err) {
        console.error(err)
      }
    },

    async addToVault({ dispatch }, vaultKeepData) {
      try {
        let res = await api.post("vaultkeeps", vaultKeepData)
        console.log("vaultKeeps response:", res.data)
        dispatch("getMyVaults")
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
