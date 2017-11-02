<template>
 <div class="content-wrapper content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 24px;font-weight:blod;">帐号列表</span>
       </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
              <el-row>
                <el-col :span="7">
                  <span class="detail-label is-required">编组名称:</span>
                  <el-input size="small" placeholder="请输入编组名称" style="width:200px" v-model="filters.groupName"></el-input>
                </el-col>
                <el-col :span="7">
                  <span class="detail-label is-required">账号编组id:</span>
                  <el-input size="small" placeholder="请输入账号编组id" style="width:200px" v-model="filters.groupId"></el-input>
                </el-col>
                <el-col :span="7">
                  <span class="detail-label is-required">创建人:</span>
                  <el-input size="small" placeholder="请输入创建人" style="width:200px" v-model="filters.creator"></el-input>
                </el-col>
                <el-col :span="3">
                  <el-button type="primary" @click="searchGroup">查询</el-button>
                </el-col>
              </el-row>
          </div>
        </div>
        <div class="detail-block">
          <el-table :data="groups" v-loading="listLoading" element-loading-text="数据加载中">
            <el-table-column label="序号" prop="id"></el-table-column>
            <el-table-column label="编组名称" prop="group_name"></el-table-column>
            <el-table-column label="创建时间" prop="create_date"></el-table-column>
            <el-table-column label="覆盖账号数" prop="accouts_number"></el-table-column>
            <el-table-column label="创建人" prop="creator">
            </el-table-column>
            <el-table-column label="操作查看" >
              <template slot-scope="item">
                <el-button size="small" @click="editTask(item.$index, item.row)" >编辑</el-button>
                <el-button size="small" @click="delGroup(item.$index, item.row)" >删除</el-button>
              </template>
            </el-table-column>
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
import methods from './listJS'

let that;

export default {
  name: 'taskList',
  data () {
    return {
      groups : [],
      listLoading : true,
      total: 0,
      page : 1,
      filters: {
        groupName:'',
        groupId: '',
        creator:"",
      },
      value:""
    }
  },
  mounted () { 
    this.getGList();
  },
  computed: {
  },
  methods: methods
  
}
</script>