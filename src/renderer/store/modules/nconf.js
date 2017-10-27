import { ipcRenderer } from 'electron'
const state = {
  nconf: {
    name: "elejd",
    version: "1.0.0",
    smsPlantform: "yumi",
    verifyPlantform: "1",
    regTimeStep: 5000,
    timeOut: 38000,
    regFileDir: "C:\\Users\\liguangxin@dangdang.com\\Desktop",
    yumi: {
      username: "444",
      password: "ele12345",
      point: 0,
      apiid: "56245-hfe",
      pid: 0
    },
    xingjk: {
      username:"123",
      password:"123",
      pid: 1
    },
    jsdati: {
      username: "ralap046",
      password: "535423160",
      point: 0,
      timeout: 3000
    }
  }
}
const getters = {
  getNconf: (state, getters, rootState) => state.nconf
}

const mutations = {
  SET_NCONF (state,arg) {
    state.nconf.smsPlantform = arg.smsPlantform
    state.nconf.verifyPlantform = arg.verifyPlantform
    state.nconf.regTimeStep = arg.regTimeStep
    state.nconf.timeOut = arg.timeOut
    state.nconf.regFileDir = arg.regFileDir
    state.nconf.yumi.username = arg.yumi.username
    state.nconf.yumi.password = arg.yumi.password
    state.nconf.yumi.point = arg.yumi.point
    state.nconf.yumi.apiid = arg.yumi.apiid
    state.nconf.yumi.pid = arg.yumi.pid
    state.nconf.xingjk.username = arg.xingjk.name
    state.nconf.xingjk.password = arg.xingjk.password
    state.nconf.xingjk.pid = arg.xingjk.pid
    state.nconf.jsdati.username = arg.jsdati.username
    state.nconf.jsdati.password = arg.jsdati.password
    state.nconf.jsdati.point = arg.jsdati.point
    state.nconf.jsdati.timeout = arg.jsdati.timeout
  },
  SET_SMS_PLANT (state,plant) {
    state.nconf.smsPlantform = plant
    saveToNconf('smsPlantform',plant)
  },
  SET_VERIFY_PLANT(state,plant){
    state.nconf.verifyPlantform = plant
    saveToNconf('verifyPlantform',plant)
  },
  SET_REG_TIME_STEP(state,step){
    state.nconf.regTimeStep = step
    saveToNconf('regTimeStep',step)
  },
  SET_TIMEOUT(state,timeout){
    state.nconf.timeOut = timeout
    saveToNconf('timeOut',timeout)
  },
  SET_REG_FILE_DIR(state,fileDir){
    state.nconf.regFileDir = fileDir
    saveToNconf('regFileDir',fileDir)
  },
  SET_YUMI_USER(state,username){
    state.nconf.yumi.username = username
    saveToNconf('yumi:username',username)
  },
  SET_YUMI_PWD(state,pwd){
    state.nconf.yumi.password = pwd
    saveToNconf('yumi:password',pwd)
  },
  SET_YUMI_POINT(state,point){
    state.nconf.yumi.point = point
    saveToNconf('yumi:point',point)
  },
  SET_YUMI_APIID(state,apiid){
    state.nconf.yumi.apiid = apiid
    saveToNconf('yumi:apiid',apiid)
  },
  SET_YUMI_PID(state,pid){
    state.nconf.yumi.pid = pid
    saveToNconf('yumi:pid',pid)
  },
  SET_XINGJK_USER(state,user){
    state.nconf.xingjk.username = user
    saveToNconf('xingjk:name',user)
  },
  SET_XINGJK_PWD(state,pwd){
    state.nconf.xingjk.password = pwd
    saveToNconf('xingjk:password',pwd)
  },
  SET_XINGJK_PID(state,pid){
    state.nconf.xingjk.pid = pid
    saveToNconf('xingjk:pid',pid)
  },
  SET_JSDATI_USER(state,user){
    state.nconf.jsdati.username = user
    saveToNconf('jsdati:username',user)
  },
  SET_JSDATI_PWD(state,pwd){
    state.nconf.jsdati.password = pwd
    saveToNconf('jsdati:password',pwd)
  },
  SET_JSDATI_POINT(state,point){
    state.nconf.jsdati.point = point
    saveToNconf('jsdati:point',point)
  },
  SET_JSDATI_TIMEOUT(state,timeout){
    state.nconf.jsdati.timeout = timeout
    saveToNconf('jsdati:timeout',timeout)
  }

}

const actions = {
  setNconf ({commit },arg) {
    commit('SET_NCONF',arg)
  },
  setSMSPlant({ commit }, plant) {
    commit('SET_SMS_PLANT',plant)
  },
  setVERIFYPlant({ commit },plant){
    commit('SET_VERIFY_PLANT',plant)
  },
  setRegTimeStep({ commit },step){
    commit('SET_REG_TIME_STEP',step)
  },
  setTimeout({ commit },timeout){
    commit('SET_TIMEOUT',timeout)
  },
  setRegFileDir({ commit },fileDir){
    commit('SET_REG_FILE_DIR',fileDir)
  },
  setYumiUser({ commit },username) {
    commit('SET_YUMI_USER',username)
  },
  setYumiPwd({ commit },pwd){
    commit('SET_YUMI_PWD',pwd)
  },
  setYumiPoint({ commit },point){
    commit('SET_YUMI_POINT',point)
  },
  setYumiAPIID({ commit },apiid){
    commit('SET_YUMI_APIID',apiid)
  },
  setYumiPID({ commit },pid){
    commit('SET_YUMI_PID',pid)
  },
  setXingJKUser({ commit },user){
    commit('SET_XINGJK_USER',user)
  },
  setXingJKPwd({ commit },pwd){
    commit('SET_XINGJK_PWD',pwd)
  },
  setXingJKPID({ commit },pid){
    commit('SET_XINGJK_PID',pid)
  },
  setJSDATIUser({ commit },user){
    commit('SET_JSDATI_USER',user)
  },
  setJSDATIPWD({ commit },pwd){
    commit('SET_JSDATI_PWD',pwd)
  },
  setJSDATIPoint({ commit },point){
    commit('SET_JSDATI_POINT',point)
  },
  setJSDATITimeout({ commit },timeout){
    commit('SET_JSDATI_TIMEOUT',timeout)
  }
}
function saveToNconf(k,v){
  ipcRenderer.send('sync-saveConf',{field:k,val:v})
}
export default {
  state,
  getters,
  mutations,
  actions
}
