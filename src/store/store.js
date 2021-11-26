import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

//Internal store functions

Vue.use(Vuex);

//End of internal store functions


const store = new Vuex.Store({
  state: {
    lists: [],
    currentID: 0
  },
  getters: getters,
  mutations: mutations,
  actions: actions
})

export default store;