<template>
 <div class="content-wrapper content">
     <el-card class="box-card">
       <div slot="header" class="clearfix">
            <span style="line-height: 24px;font-weight:blod;">任务列表</span>
       </div>
          <el-table :data="studentData" style="width: 100%">
            <el-table-column label="任务名称" prop="studentNo"></el-table-column>
            <el-table-column label="任务类型" prop="studentName"></el-table-column>
          </el-table>
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
import data from './data'

let that

export default {
  name: 'taskList',
  data () {
    return data.init();
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>