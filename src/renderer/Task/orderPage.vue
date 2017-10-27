<template>
<div>
         <div class="content-wrapper content">
         <el-card class="box-card" v-loading.body="loading" element-loading-text="任务发布中">
           <div slot="header" class="clearfix">
             <span style="line-height: 24px;font-weight:blod;">发布订单任务</span>
             <el-button style="float: right;" size="small" type="primary" @click="saveTask">发布</el-button>
           </div>

           <div class="detail-block"><el-input  placeholder="请输入任务名称" v-model="task_name"></el-input></div>
            <div class="detail-block">
                <div class="detail-infos control-group">
                    <el-row>
                      <el-col :span="12">
                      <span class="detail-label is-required">订单数量:</span><el-input-number v-model="task_order_num" size="small" style="width:200px"></el-input-number>
                      </el-col>
                      <el-col :span="12">
                      <span class="detail-label is-required">购买数量:</span><el-input-number v-model="task_buy_num" size="small" style="width:200px"></el-input-number>
                      </el-col>
                    </el-row>
                </div>

                <div class="detail-infos control-group">
                 <el-row>
                  <el-col :span="12">
                    <span class="detail-label is-required">商品&nbsp;&nbsp;ID:</span><el-input v-model="task_product_id" size="small" placeholder="请输入商品ID" style="width:200px" ></el-input>
                  </el-col>
                  <el-col :span="12">
                    <span class="detail-label">店铺ID:</span><el-input v-model="task_shop_id" size="small" placeholder="请输入店铺ID" style="width:200px" ></el-input>
                  </el-col>
                </el-row>

                </div>
                <div class="detail-infos control-group">
                    <span class="detail-label is-required">执行时间:</span>
                       <el-select size="small" v-model="task_time_type" placeholder="请选择"  @change="selectTaskTimeType" style="width:200px">
                          <el-option key="1" label="立即执行" value="1"></el-option>
                          <el-option key="2" label="定时执行" value="2"></el-option>
                          <el-option key="3" label="分布执行" value="3"></el-option>
                        </el-select>
                        <el-date-picker style="margin-left:10px;"  v-show="task_time_con_2_show" v-model="task_time_con_2" type="datetime" placeholder="定时时间" size="small"></el-date-picker>

                        <el-date-picker style="margin-left:10px;" v-show="task_time_con_3_show" v-model="task_time_con_3" type="datetimerange" format="yyyy-MM-dd HH:mm:ss" placeholder="时间范围" size="small"></el-date-picker>
                </div>

            </div>

            <div class="detail-block">
                <div class="detail-infos control-group">
                    <el-row>
                      <el-col :span="12">
                        <span class="detail-label is-required">账号类型:</span>
                        <el-select size="small" v-model="task_user_type" placeholder="请选择" style="width:200px">
                          <el-option key="0" label="不限" value="0"></el-option>
                          <el-option key="1" label="手机" value="1"></el-option>
                          <el-option key="2" label="用户名" value="2"></el-option>
                          <el-option key="3" label="随机" value="3"></el-option>
                        </el-select>
                      </el-col>
                      <el-col :span="12">
                        <span class="detail-label is-required">账号等级:</span>
                        <el-select size="small" v-model="task_user_level" placeholder="请选择" style="width:200px">
                          <el-option key="0" label="不限" value="0"></el-option>
                          <el-option key="1" label="临时" value="1"></el-option>
                          <el-option key="2" label="普通" value="2"></el-option>
                          <el-option key="3" label="银牌" value="3"></el-option>
                          <el-option key="4" label="钻石" value="4"></el-option>
                        </el-select>
                      </el-col>
                    </el-row>
                </div>
                <div class="detail-infos control-group">
                    <el-row>
                      <el-col :span="12">
                        <span class="detail-label is-required">地域:</span>
                        <el-select size="small" v-model="task_province" placeholder="请选择" style="width:200px">
                          <el-option key="0" label="随机" value="0"></el-option>
                        </el-select>
                      </el-col>
                      <el-col :span="12">
                        <span class="detail-label is-required">环境:</span>
                        <el-select size="small" v-model="task_env" placeholder="请选择" style="width:200px">
                          <el-option key="0" label="随机全部" value="0"></el-option>
                          <el-option key="2" label="随机桌面" value="2"></el-option>
                          <el-option key="3" label="随机手机环境" value="3"></el-option>
                        </el-select>
                      </el-col>
                    </el-row>
                </div>
                <div class="detail-infos control-group">
                    <span class="detail-label">标签Tags:</span>
                </div>
            </div>

            <div class="detail-block">
               <div class="detail-infos control-group">
                    <el-row>
                      <el-col :span="12">
                        <span class="detail-label is-required">收货率:</span>
                         <el-input-number size="small" v-model="task_confirm_rate"></el-input-number> %
                      </el-col>
                      <el-col :span="12">
                        <span class="detail-label is-required">收货时间:</span>
                        <el-input-number size="small" v-model="task_confirm_time"></el-input-number> 分钟
                      </el-col>
                    </el-row>
                </div>
                <div class="detail-infos control-group">
                    <el-row>
                         <el-col :span="12">
                           <span class="detail-label is-required">评价率:</span>
                           <el-input-number size="small" v-model="task_comment_rate"></el-input-number> %
                         </el-col>
                         <el-col :span="12">
                           <span class="detail-label is-required">评价时间:</span>
                            <el-input-number size="small" v-model="task_comment_time"></el-input-number> 分钟
                         </el-col>
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