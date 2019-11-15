export default {
  namespaced: true,
  state: {
    counts: 10
  },
  mutations: {
    setCount(state, num) {
      state.count -= num;
    }
  },
  actions: {
    AddCount({ commit }, num) {
      return new Promise((resolve, reject) => {
        commit('setCount', num);
        resolve();
      })
    }
  }
}