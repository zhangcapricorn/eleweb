<template>
  <div>
    <div class="content-wrapper content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 24px;font-weight:blod;">帐号统计</span>
        </div>

        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="24">
                <span class="detail-label is-required">总账号数：{{totalAccountNumbers}}</span>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="detail-block">
          <el-collapse v-model="activeNames">
            <el-collapse-item title="总账户情况" name="1">
              <div>可用账户：{{availableAccount}}</div> 
              <el-progress :text-inside="true" :stroke-width="18" :percentage="availableAccountRate"></el-progress>
              <div>不可用账户：{{unavailableAccount}}</div>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="unavailableAccountRate"></el-progress>
            </el-collapse-item>

            <el-collapse-item title="账户使用情况" name="2">
              <div>已使用账户：{{usedAccount}}</div> 
              <el-progress :text-inside="true" :stroke-width="18" :percentage="usedAccountRate"></el-progress>
              <div>未使用账户：{{unusedAccount}}</div>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="unusedAccountRate"></el-progress>
            </el-collapse-item>

            <el-collapse-item title="账户浏览情况（t-1周日均）：" name="3">
  
            </el-collapse-item>

            <el-collapse-item title="账户下单情况（t-1日）：" name="4">
              
            </el-collapse-item>
            
            <el-collapse-item title="账户评价情况（t-1周均）：" name="5">
              
            </el-collapse-item>
            
            <el-collapse-item title="账户归属城市：" name="6">
              
            </el-collapse-item>
            
          </el-collapse>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { ipcRenderer,clipboard } from 'electron'
import { mapGetters, mapActions } from 'vuex'
import methods from './detailJS'

let that
export default {
  name: 'index',
  data () {
    return {
      totalAccountNumbers : 0,
      availableAccount : 0,
      availableAccountRate : 0.0,
      unavailableAccount : 0,
      unavailableAccountRate : 0.0,
      usedAccount : 0,
      usedAccountRate : 0.0,
      unusedAccount : 0,
      unusedAccountRate : 0.0,
      activeNames : ['1']
    }
  },
  components: {
   
  },
  mounted () {

  },
  computed: {
  },
  methods: methods
}
</script>

<style scoped>
#app .el-button--small{
padding:5px 7px;
}
</style>