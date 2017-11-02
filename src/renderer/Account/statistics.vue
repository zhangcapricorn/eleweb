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
                <span class="detail-label is-required">总账号数：{{accountStatistics.totalAccountNumbers}}</span>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="detail-block">
          <el-collapse v-model="activeNames">
            <el-collapse-item title="总账户情况" name="1">
              <div>可用账户：{{accountStatistics.availableAccount}}</div> 
              <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
              <div>不可用账户：{{accountStatistics.unavailableAccount}}</div>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
            </el-collapse-item>

            <el-collapse-item title="账户使用情况" name="2">
              <div>已使用账户：{{accountStatistics.usedAccount}}</div> 
              <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
              <div>未使用账户：{{accountStatistics.unusedAccount}}</div>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
            </el-collapse-item>

            <el-collapse-item title="账户浏览情况（t-1周日均）：" name="3" >
              <div v-for="(item, idx) in accountStatistics.accountView" :key="idx">
                <infoTag :item="item"></infoTag>
                <rateTag :item="item"></rateTag>
              </div>
            </el-collapse-item>

            <el-collapse-item title="账户下单情况（t-1日）：" name="4">
              <div v-for="(item, idx) in accountStatistics.accountOrderStatus" :key="idx">
                <infoTag :item="item"></infoTag>
                <rateTag :item="item"></rateTag>
              </div>
            </el-collapse-item>
            
            <el-collapse-item title="账户评价情况（t-1周均）：" name="5">
              <div v-for="(item, idx) in accountStatistics.accountComment" :key="idx">
                <infoTag :item="item"></infoTag>
                <rateTag :item="item"></rateTag>
              </div>
            </el-collapse-item>
            
            <el-collapse-item title="账户归属城市：" name="6">
              <div v-for="(item, idx) in accountStatistics.accountCitys" :key="idx">
                <infoTag :item="item"></infoTag>
                <rateTag :item="item"></rateTag>
              </div>
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
import methods from './statisticsJS'

let that
export default {
  name: 'index',
  data () {
    return {
      activeNames : ['1'],
      accountStatistics :{
        'totalAccountNumbers' : 0,
        'availableAccount' : 0,
        'unavailableAccount' : 0,
        'usedAccount' : 0,
        'unusedAccount' : 0,
        'accountView' : {
            '<0' : 0,
            '>=1<2' : 0,
            '>=2<5' : 0,
            '>=5<10' : 0,
            '>=10' : 0
        },
        'accountOrderStatus' : {
            '<0' : 0,
            '>=1<2' : 0,
            '>=2<3' : 0,
            '>=3' : 0
        },
        'accountComment' : {
            '<0' : 0,
            '>=1<2' : 0,
            '>=2<5' : 0,
            '>=5<10' : 0,
            '>=10' : 0,
        },
        'accountCitys' : {
            '北京' : 0,
            '上海' : 0,
            '深圳' : 0,
            '四川' : 0,
            '昆明' : 0,
        }
      }
    }
  },
  components: {
    infoTag : {
      props : ['item'],
      template : '<div>{{item.key}} : {{item.value}}</div>'
    },
    rateTag : {
      props : ['item'],
      template : '<el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>'
    }
  },
  mounted () {
    this.getAStatistics();
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