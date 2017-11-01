<template>
 <div class="content-wrapper content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 24px;font-weight:blod;">任务列表</span>
       </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
              <el-row>
                <el-col :span="6">
                  <el-radio-group v-model="processState" @change="filterProcess">
                    <el-radio class="radio" label="1" size="small">待付款</el-radio>
                    <el-radio class="radio" label="2" size="small">待确认收货</el-radio>
                    <el-radio class="radio" label="3" size="small">完成</el-radio>
                  </el-radio-group>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="16">
                  <p v-loading="listLoading">统计：总任务{{total}}个,待付款{{unPayfor}}个,待确认收货{{unDelivery}}个,完成{{finished}}</p>
                </el-col>
              </el-row>
          </div>
        </div>
        <div class="detail-block">
          <el-table :data="todolist" style="width: 100%" v-loading="listLoading" element-loading-text="数据加载中">
            <el-table-column label="账号" prop="jdAccount"></el-table-column>
            <el-table-column label="账号归属编组" prop="accountGroup"></el-table-column>
            <el-table-column label="订单归属路径" prop="browserPath"></el-table-column>
            <el-table-column label="执行时间" prop="todoDate"></el-table-column>
            <el-table-column label="完成订单时间" prop="finishDate"></el-table-column>
            <el-table-column label="订单编号" prop="orderId"></el-table-column>
            <el-table-column label="商品数" prop="orderNumbr"></el-table-column>
            <el-table-column label="下单金额" prop="orderPrice"></el-table-column>
            <el-table-column label="操作查看" prop="process"></el-table-column>
          </el-table>
          <el-col :span="24" class="toolbar">
            <el-pagination layout="prev, pager, next" size="small" :page-size="5" :total="total" @current-change="handleCurrentChange" style="float:right;">
            </el-pagination>
          </el-col>
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
import methods from './todoListJS'

let that;

export default {
  name: 'todos',
  data () {
    return {
      taskId :0,
      todolist : [],
      listLoading : true,
      processState : "3",
      todoListNumber : 0,
      unPayfor:0,
      unDelivery:0,
      finished:0,
      total:0,
      page:1
    }
  },
  mounted () { 
    this.getTaskID();
    this.getTodoInfo();
  },
  computed: {
  },
  methods: methods
}
</script>