const state = {
  navOpen: false
}
const getters = {
  getNavOpen: (state, getters, rootState) => state.navOpen
}

const mutations = {
  TOGGLE_NAV (state) {
    state.navOpen = !state.navOpen
  },
  CLOSE_NAV (state){
    state.navOpen = false
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  toggleNav ({ commit }) {
    commit('TOGGLE_NAV')
  },
  closeNav ({ commit }){
    commit('CLOSE_NAV')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
