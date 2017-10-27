const state = {
  localIP: '',
  proxyIp: ''
}
const getters = {
  getLocalIP: (state, getters, rootState) => state.localIP,
  getProxyIP: (state, getters, rootState) => state.proxyIp
}

const mutations = {
  SET_PROXY_IP (state,ip) {
    state.proxyIp = ip
  },
  SET_LOCAL_IP (state,ip){
    state.localIP = ip
  }
}

const actions = {
  setProxyIP ({ commit },ip) {
    commit('SET_PROXY_IP',ip)
  },
  setLocalIP ({ commit },ip){
    commit('SET_LOCAL_IP',ip)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
