<template>
  <div>
    <div class="content-wrapper content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 24px;font-weight:blod;">发布订单任务</span>
          <el-button style="float: right;" size="small" type="primary" @click="insertNewTask">发布</el-button>
        </div>

        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="12">
                <el-input  placeholder="请输入带有任务特点的名称，少于15字" size="medium" v-model="task_name" style="width:300px">
                </el-input>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="12">
                <span class="detail-label is-required">订单数量:</span>
                <el-tooltip content="请输入大于0的整数" placement="top">
                  <el-input-number v-model="task_order_num" size="small" style="width:200px"></el-input-number>
                </el-tooltip>
              </el-col>
              <el-col :span="12">
                <span class="detail-label is-required">购买数量:</span>
                <el-tooltip content="请输入大于0的整数且大于等于订单数" placement="top">
                  <el-input-number v-model="task_buy_num" size="small" style="width:200px"></el-input-number>
                </el-tooltip>
              </el-col>
            </el-row>
          </div>
          <div class="detail-infos control-group">
            <span class="detail-label-line is-required">每单购买商品数量:</span>
            <el-tooltip content="请输入大于0的整数" placement="top">
              <el-input-number v-model="each_order_num" size="small" style="width:200px"></el-input-number>
            </el-tooltip>
          </div>
        </div>

        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <span class="detail-label-line is-required">选择订单所用编组账号:</span>
                <el-select size="small" v-model="the_jd_account" placeholder="请选择"  @change="" style="width:200px">
                  <el-option v-for="(item, idx) in account_groups" :key="idx" :value="item.group_name" :label="item.group_name">
                  </el-option>
                </el-select>
                <el-button size="small" type="primary" @click="saveAccountGroups">添加</el-button>
            </el-row>
          </div>
          <div class="detail-infos control-group">
            <ul>
              <li v-for="(item, idx) in jd_account_conditions" :key="idx" v-model="task_jd_accounts">
                <conditionTag :item="item"></conditionTag><rateTag :item="item"></rateTag><deleteAccountTag :idx="idx" @delAccount="spliceAccounts"></deleteAccountTag>
              </li>
            </ul>
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <span class="detail-label-line is-required">选择订单所用编组路径:</span>
                <el-select size="small" v-model="the_browser_path" placeholder="请选择" style="width:200px">
                  <el-option v-for="(item, idx) in browser_paths" :key="idx" :value="item.path_name" :label="item.path_name">
                  </el-option>
                </el-select>
                <el-button size="small" type="primary" @click="saveBrowserPath">添加</el-button>
            </el-row>
          </div>
          <div class="detail-infos control-group">
            <ul>
              <li v-for="(item, idx) in browser_paths_conditions" :key="idx">
                <conditionTag :item="item"></conditionTag><rateTag :item="item"></rateTag><deleteBrowserTag :idx="idx" @delBrowser="spliceBrowsers"></deleteBrowserTag>
              </li>
            </ul>
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="12">
                <span class="detail-label is-required">任务收货比率:</span>
                <el-input-number size="small" v-model="task_delivery_rate"></el-input-number> %
              </el-col>
              <el-col :span="12">
                <span class="detail-label is-required">收货时间：</span>
                <el-input-number v-model="delivery_from" size="small" style="width:100px"></el-input-number> - 
                <el-input-number v-model="delivery_to" size="small" style="width:100px"></el-input-number>
              </el-col>
            </el-row>
          </div>
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="12">
                <span class="detail-label is-required">任务评价比率:</span>
                <el-input-number size="small" v-model="task_confirm_rate"></el-input-number> %
              </el-col>
              <el-col :span="12">
                <span class="detail-label is-required">评价时间：</span>
                <el-input-number v-model="confirm_from" size="small" style="width:100px"></el-input-number> - 
                <el-input-number v-model="confirm_to" size="small" style="width:100px"></el-input-number>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <span class="detail-label is-required">任务始末时间:</span>
              <el-date-picker type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker v-model="beginDate_endDatae">            
              </el-row>
          </div>
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
      id : 0,
      task_name:"",
      task_order_num:0,
      task_buy_num:0,
      each_order_num:0,
      task_jd_accounts:[],
      browser_paths:[],
      account_groups:[],
      task_delivery_rate:0,
      delivery_from:"",
      delivery_to:"",
      task_confirm_rate:0,
      confirm_from:'',
      confirm_to:'',
      beginDate_endDatae:'',
      the_browser_path:'',
      the_jd_account:'',
      task_browser_paths : [],
      browser_paths_conditions : [],
      jd_account_conditions : [],
      message : ""
    }
  },
  components: {
   conditionTag : {
    props: ['item'],
    template : '<label>条件1:{{item}} 占比: </label>',
   },
   rateTag :{
    template: '<el-input-number size="small"></el-input-number>'
   },
   deleteAccountTag:{
    props: ['idx'],
    template: '<el-button size="small" type="primary" @click="deleteAccount(idx, accounts)" style="float:right;">删除</el-button>',
    methods: {
      deleteAccount(idx){
        this.$emit("delAccount", idx);
      }
    },
   },
   deleteBrowserTag:{
      props: ['idx'],
      template: '<el-button size="small" type="primary" @click="deleteBrowser(idx)" style="float:right;">删除</el-button>',
      methods: {
        deleteBrowser(idx){
          this.$emit("delBrowser", idx);
        }
      }
    } 
  },
  mounted () {
    this.getDetail();
    this.getBrowserPaths();
    this.getAGroups();
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