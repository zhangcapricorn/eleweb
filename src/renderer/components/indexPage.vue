<template>
<div>
          <div class="tools">
            <div class="tools-list mr30">
              <el-dropdown split-button size="small" trigger="click" class="mr6" @command="userFile">
                账号
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="in">导入</el-dropdown-item>
                  <el-dropdown-item command="out" style="display:none">导出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

              <el-select size="small" v-model="provinceValue" placeholder="选择线路" class="provice-select mr6">
                <el-option v-for="item in provinceList" :key="item" :label="item" :value="item"></el-option>
              </el-select>
              <div class="mr6 proxyType">
                <el-radio size="small" v-model="proxyType" label="1">驱动</el-radio>
                <el-radio size="small" v-model="proxyType" label="2">L2TP</el-radio>
              </div>
              <el-button size="small" class="mr6" :loading="proxyLoading" @click="clickTwin">拨号</el-button>

            </div>
          </div>
          <div class="content-wrapper">
            <el-table :data="userList" style="width:100%" :height="360" class="user-list" @cell-dblclick="cellClick" >
              <el-table-column type="expand" >
                <template scope="props">
                  <el-form label-position="left"  >
                  <el-form-item label="订单号" class="item-order">
                      <span>{{ props.row.order }}</span>
                    </el-form-item>
                    <el-form-item label="收货人" class="item-name">
                      <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="收货手机" class="item-phone">
                      <span>{{ props.row.phone }}</span>
                    </el-form-item>
                    <el-form-item label="收货地址" class="item-address">
                      <span>{{ props.row.address }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column type="index" width="60"></el-table-column>
              <el-table-column label="日期">
                <template scope="scope">
                  <span>{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="手机号" prop="username"></el-table-column>
              <el-table-column label="密码" prop="pwd"></el-table-column>
              <el-table-column label="IP" prop="ip"></el-table-column>
              <el-table-column label="操作">
                <template scope="scope">
                  <el-button type="text" size="small" @click="openWindow(scope.row.username,scope.row.pwd)">打开</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="logs">
            <span class="logs-title">日志</span>
              <ul class="logs-content">
                 <li v-for="item in logData">{{ item.message }}</li>
              </ul>
            </div>
          </div>

</div>
</template>

<script>
import { ipcRenderer,clipboard } from 'electron'
import { mapGetters, mapActions } from 'vuex'
let that
console.log('主页面pid：', process.pid)

export default {
  name: 'index',
  data () {
    return {
      proxyLoading:false,
      proxyType:"1",
      logData:[{message:'载入'}],
      provinceList: ['所有'],
      provinceValue: '所有',
      userList: []
    }
  },
  mounted () {
    ipcRenderer.on('add-logs', (event, arg) => {
      this.addLogs(arg.msg)
    })
  },
  computed: {
  },
  methods: {
    openWindow(username,pwd){
      ipcRenderer.send('open-window',{username:username,pwd:pwd})
    },
    clickTwin(){
        console.log('clickTwin')
      ipcRenderer.send('Twin',{type:'123'})
    },
    cellClick(row, column, cell, event){
      if(column.label == '手机号'){
        clipboard.writeText(row.id)
      }else if(column.label == '密码'){
        clipboard.writeText(row.pwd)
      }
    },
    userFile(command){
      console.log(command)
      if(command == 'in') {
        ipcRenderer.send('sync-addUser',{userList:this.userList})
      }else{
        ipcRenderer.send('sync-openDir')
      }
    },
    addLogs (msg) {
      let time = ''
      time = this.getTime()
      this.lastTime = time
      time += ' '
      time += msg
      this.lastTime = new Date().getTime()
      this.logData.unshift({ message: time })
    },
    getTime () {
      const d = new Date()
      let time = ''
      time = d.getFullYear()
      time += '.'
      time += d.getMonth() + 1
      time += '.'
      time += d.getDate()
      time += ' '
      time += d.getHours()
      time += ':'
      time += d.getMinutes()
      time += ':'
      time += d.getSeconds()
      return time
    },
    gotoLink(link){
        console.log(link)
        this.$router.push(link)
    }
  }
}
</script>

<style scoped>
.logs{
  margin: 10px 1px;
  border-top: 1px solid #dddddd;
}
.logs-content{
  overflow: scroll;
  overflow-x: hidden;
  height: 80px;
  font-size: 12px;
  line-height: 14px;
}
.logs-title{
    position: relative;
    top: -7px;
    /* float: left; */
    left: 6px;
    z-index: 90;
    display: block;
    background: #f3f3f3;
    width: 40px;
    text-align: center;
}
.runTime{
  text-align:right
}
</style>