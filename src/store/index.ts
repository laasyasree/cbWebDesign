import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  key: 'workshop',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allMembers: [{ name: 'Laasya', role: 'Tech Support', mail: 'laasya.sree@chargebee.com' },
      { name: 'Chargebee Support', role: 'Owner', mail: 'support@chargebee.com' }, { name: 'xyz', role: 'Analyst', mail: 'xyz@chargebee.com' }],
    saveIndex: 0,
  },
  mutations: {
    setNewMember(state, payload) {
      state.allMembers.push(payload as never);
    },
    removeMember(state, payload): void {
      state.allMembers.splice(payload, 1);
    },
    updateRole(state, payload): void {
      state.allMembers[state.saveIndex].role = payload;
    },
    saveMember(state, payload) {
      state.saveIndex = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getAllMembers(state) {
      return state.allMembers;
    },
  },
  plugins: [vuexPersist.plugin],
});
