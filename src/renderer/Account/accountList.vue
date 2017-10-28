<template>
 <div class="content-wrapper content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 24px;font-weight:blod;">任务列表</span>
       </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
              <el-row>
                <el-col :span="12">
                  <button @click="getUsers">增加 1</button><p>这个按钮被点击了 {{ counter }} 次。</p>
                  <span class="detail-label is-required">名称:</span>
                  <el-input size="small" placeholder="请输入任务名称" style="width:200px" ></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="detail-label is-required">Skuid:</span>
                  <el-input size="small" placeholder="请输入skuid" style="width:200px" ></el-input>
                </el-col>
              </el-row>
          </div>
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="12">
                  <span class="detail-label is-required">任务编号:</span>
                  <el-input size="small" placeholder="请输入任务编号" style="width:200px" ></el-input>
              </el-col>
              <el-col :span="12">
                  <span class="detail-label is-required">按天查询:</span>
                  <el-date-picker type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
              </el-col>
            </el-row>
          </div>
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="12">
                <span class="detail-label is-required">状态查询:</span>
                <el-select size="small" placeholder="请选择" style="width:200px">
                  <el-option key="1" label="未开始" value="1"></el-option>
                  <el-option key="2" label="执行中" value="2"></el-option>
                  <el-option key="3" label="待付款" value="3"></el-option>
                  <el-option key="3" label="待评价" value="3"></el-option>
                  <el-option key="3" label="已完成" value="3"></el-option>
                </el-select>
              </el-col>
              <el-col :span="12">
                <el-button type="primary">查询</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="detail-block">
          <el-table :data="orders" style="width: 100%">
            <el-table-column label="序号" prop="id"></el-table-column>
            <el-table-column label="任务名称" prop="task"></el-table-column>
            <el-table-column label="执行时间" prop="date"></el-table-column>
            <el-table-column label="任务数量" prop="number"></el-table-column>
            <el-table-column label="任务状态" prop="status"></el-table-column>
            <el-table-column label="操作查看" ></el-table-column>
          </el-table>
        </div>
          
     </el-card>
 </div>
</template>
<style>
 .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
<script>
import { ipcRenderer,clipboard } from 'electron'
import { mapGetters, mapActions } from 'vuex'
import {getAccounts} from '../../api/account'

let that;
let initOrders = function() {
        let para = {
          page: 0,
          task: ""
        };
        getAccounts(para).then((res) => {
        console.log("ttt");
          this.orders = res.data.orders;
          console.log(this.orders);
        });
      };

export default {
  name: 'taskList',
  data () {
    return {
      orders : initOrders,
      counter: 0,
      page : 1,
      filters: {
          task: ''
        },
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    //获取用户列表
      getUsers() {
        let para = {
          page: this.page,
          task: this.filters.task
        };
        getAccounts(para).then((res) => {
        console.log("ttt");
          this.orders = res.data.orders;
          console.log(this.orders);
        });
      },

  }
}
</script>