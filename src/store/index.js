import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      cityName: 'london', 
      apiKey:'9bafddae4156cbd09dc23d6fc4da84be'
    };
  },
    mutations: {
      set_city_name(state, payload) {
        state.cityName = payload;
      },
    },
    actions: {
      updateCityName({ commit }, payload) {
        commit('set_city_name', payload);
      },
    },
    getters: {
      getCityName: state => state.cityName,
      getApiKey: state => state.apiKey,
    },
  });