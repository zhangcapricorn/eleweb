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
                  <el-input size="small" placeholder="请输入任务名称" style="width:200px" v-model="filters.task_name"></el-input>
                </el-col>
                <el-col :span="12">
                  <span class="detail-label is-required">Skuid:</span>
                  <el-input size="small" placeholder="请输入skuid" style="width:200px" v-model="filters.skuid"></el-input>
                </el-col>
              </el-row>
          </div>
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="12">
                  <span class="detail-label is-required">任务编号:</span>
                  <el-input size="small" placeholder="请输入任务编号" style="width:200px" v-model="filters.id"></el-input>
              </el-col>
              <el-col :span="12">
                  <span class="detail-label is-required">按天查询:</span>
                  <el-date-picker type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="filters.date"></el-date-picker>
              </el-col>
            </el-row>
          </div>
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="12">
                <span class="detail-label is-required">状态查询:</span>
                <el-select size="small" placeholder="请选择" style="width:200px" v-model="filters.status">
                  <el-option v-for="(item, idx) in status" :value="item.id" :label="item.label" :key="item.label">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="12">
                <el-button type="primary" @click="searchTask">查询</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="detail-block">
          <el-table :data="tasks" style="width: 100%" v-loading="listLoading" element-loading-text="数据加载中">
            <el-table-column label="序号" prop="id"></el-table-column>
            <el-table-column label="任务名称" prop="task_name"></el-table-column>
            <el-table-column label="执行时间" prop="beginDate"></el-table-column>
            <el-table-column label="任务数量" prop="task_order_num"></el-table-column>
            <el-table-column label="任务状态" prop="status">
            </el-table-column>
            <el-table-column label="操作查看" >
              <template slot-scope="item">
                <el-button size="small" @click="editTask(item.$index, item.row)" >编辑</el-button>
                <el-button size="small" @click="gotoTaskTodoList(item.$index, item.row)" >查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-col :span="24" class="toolbar">
            <el-pagination layout="prev, pager, next" size="small" :page-size="10" :total="total" @current-change="handleCurrentChange" style="float:right;">
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
import methods from './listJS'

let that;

export default {
  name: 'taskList',
  data () {
    return {
      tasks : [],
      listLoading : true,
      total: 0,
      page : 1,
      filters: {
        id :"",
        task_name: '',
        skuid:"",
        date:"",
        status:""
      },
      status : [
        {"id":1, "label":"未开始"},
        {"id":2, "label":"执行中"},
        {"id":3, "label":"待付款"},
        {"id":4, "label":"待评价"},
        {"id":5, "label":"已完成"},
      ],
      value:""
    }
  },
  mounted () { 
    this.getTasksListInfo();
  },
  computed: {
  },
  methods: methods
  
}
</script>