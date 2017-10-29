<template>
  <div>
    <div class="content-wrapper content">
      <el-card class="box-card" v-loading.body="loading" element-loading-text="任务发布中">
        <div slot="header" class="clearfix">
          <span style="line-height: 24px;font-weight:blod;">发布订单任务</span>
          <el-button style="float: right;" size="small" type="primary" @click="saveTask">发布</el-button>
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
              <el-input-number v-model="task_order_num" size="small" style="width:200px"></el-input-number>
            </el-tooltip>
          </div>
        </div>

        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <span class="detail-label-line is-required">选择订单所用编组账号:</span>
                <el-select size="small" v-model="task_time_type" placeholder="请选择"  @change="selectTaskTimeType" style="width:200px">
                  <el-option key="1" label="未开始" value="1"></el-option>
                  <el-option key="2" label="执行中" value="2"></el-option>
                  <el-option key="3" label="待付款" value="3"></el-option>
                  <el-option key="3" label="待评价" value="3"></el-option>
                  <el-option key="3" label="已完成" value="3"></el-option>
                </el-select>

                <el-button size="small" type="primary" @click="saveTask">添加</el-button>
            </el-row>
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <span class="detail-label-line is-required">选择订单所用编组路径:</span>
                <el-select size="small" v-model="task_time_type" placeholder="请选择"  @change="selectTaskTimeType" style="width:200px">
                  <el-option key="1" label="未开始" value="1"></el-option>
                  <el-option key="2" label="执行中" value="2"></el-option>
                  <el-option key="3" label="待付款" value="3"></el-option>
                  <el-option key="3" label="待评价" value="3"></el-option>
                  <el-option key="3" label="已完成" value="3"></el-option>
                </el-select>
                <el-button size="small" type="primary" @click="saveTask">添加</el-button>
            </el-row>
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="12">
                <span class="detail-label is-required">任务收货比率:</span>
                <el-input-number size="small" v-model="task_confirm_rate"></el-input-number> %
              </el-col>
              <el-col :span="12">
                <span class="detail-label is-required">收货时间：</span>
                <el-input-number v-model="task_order_num" size="small" style="width:100px"></el-input-number> - 
                <el-input-number v-model="task_order_num" size="small" style="width:100px"></el-input-number>
              </el-col>
            </el-row>
          </div>
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="12">
                <span class="detail-label is-required">任务收货比率:</span>
                <el-input-number size="small" v-model="task_confirm_rate"></el-input-number> %
              </el-col>
              <el-col :span="12">
                <span class="detail-label is-required">收货时间：</span>
                <el-input-number v-model="task_order_num" size="small" style="width:100px"></el-input-number> - 
                <el-input-number v-model="task_order_num" size="small" style="width:100px"></el-input-number>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <span class="detail-label is-required">任务始末时间:</span>
              <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>            
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

let that
export default {
  name: 'index',
  data () {
    return {
      task_name:"",
      task_order_num:0,
      task_buy_num:0,
      task_product_id:"",
      task_shop_id:"",
      task_time_type:"1",
      task_time_con_2:"",
      task_time_con_3:[],
      task_user_type:"1",
      task_user_level:"1",
      task_province:"0",
      task_env:"0",
      task_confirm_rate:0,
      task_confirm_time:'',
      task_comment_rate:0,
      task_comment_time:'',
      task_time_con_2_show:false,
      task_time_con_3_show:false,
      loading:false
    }
  },
  mounted () {

  },
  computed: {
  },
  methods: {

    saveTask() {
        this.loading = true

    },
    selectTaskTimeType(val){
       console.log(val)
    }
  }
}
</script>

<style scoped>
#app .el-button--small{
padding:5px 7px;
}
</style>