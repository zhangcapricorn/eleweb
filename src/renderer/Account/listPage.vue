<template>
 <div class="content-wrapper content">
     <el-card class="box-card">
       <div slot="header" class="clearfix">
            <span style="line-height: 24px;font-weight:blod;">任务列表</span>
       </div>
          <el-table :data="tableTaskList" style="width: 100%" v-loading.body="loading" element-loading-text="数据加载中">
            <el-table-column type="expand">
              <template scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="账户类型">
                    <span>{{ props.row.user_type_name }}</span>
                  </el-form-item>
                  <el-form-item label="账户等级">
                    <span>{{ props.row.user_level_name }}</span>
                  </el-form-item>
                  <el-form-item label="评价率">
                    <span>{{ props.row.comment_rate }}%</span>
                  </el-form-item>
                  <el-form-item label="评价时间">
                    <span>{{ props.row.comment_time }}分</span>
                  </el-form-item>
                   <el-form-item label="收货率">
                    <span>{{ props.row.confirm_rate }}%</span>
                  </el-form-item>
                  <el-form-item label="收货时间">
                    <span>{{ props.row.confirm_time }}分</span>
                  </el-form-item>
                  <el-form-item label="购买数量">
                    <span>{{ props.row.buy_num }}</span>
                  </el-form-item>

                </el-form>
              </template>
            </el-table-column>

            <el-table-column label="任务名称" prop="name"></el-table-column>
            <el-table-column label="任务类型" prop="time_type_name"></el-table-column>
            <el-table-column label="执行时间" prop="time_type_format"></el-table-column>
            <el-table-column label="订单数量" prop="order_num"></el-table-column>
            <el-table-column label="商品 ID" prop="product_id"></el-table-column>
            <el-table-column label="发布时间" prop="create_time_format"></el-table-column>
 <!--el-table-column label="标签">
            <template scope="props">
                <el-tag type="success">{{props.row.tag }}</el-tag>
             </template>
            </el-table-column -->
          </el-table>
            <div class="block">
              <el-pagination layout="prev, pager, next" :total="taskTotal" :page-size="pagesize" ></el-pagination>
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

  let that

  export default {
    name: 'accountList',
    data () {
      return {
        loading:true,
        taskTotal:0,
        pagesize:5,
        tableTaskList: []
      }
    },
    mounted () {

    },
    computed: {
    },
    methods: {
    }
  }
</script>