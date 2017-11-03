<template>
 <div class="content-wrapper content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 24px;font-weight:blod;">浏览路径列表</span>
            <el-button style="float: right;" size="small" type="primary" @click="insertNewBPath">提交</el-button>
       </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
              <el-row>
                <el-col :span="24">
                  <span class="detail-label is-required">浏览路径名称:</span>
                  <el-input size="small" placeholder="请输入浏览路径名称" style="width:200px" v-model="path_name"></el-input>
                </el-col>
              </el-row>
          </div>
        </div>

        <div class="detail-block">
          <div class="detail-infos control-group">
              <el-row>
                <el-col :span="24">
                  <el-button style="float: left;" size="small" type="primary" @click="addNewPath">添加新路径</el-button>
                </el-col>
              </el-row>

              <el-row v-for="(item, idx) in pathNumber" :key="idx">
                <el-col :span="8">
                  <spanTag :idx="idx"></spanTag>
                  <linkTag></linkTag>
                </el-col>
                <el-col :span="8">
                  <span class="detail-label is-required">停留时间:</span>
                  <secondTag></secondTag> 秒
                </el-col>
                <el-col :span="8">
                  <delTag :idx="idx" @delPath="doDeletePath"></delTag>
                </el-col>
              </el-row>
          </div>
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
import methods from './detailJS'

let that;

export default {
  name: 'taskList',
  data () {
    return {
      path_name : '',
      paths : [],
      pathNumber : 0
    }
  },
  mounted () { 
  },
  components: {
    spanTag : {
      props: ['idx'],
      template : '<span class="detail-label is-required">浏览路径{{idx + 1}}:</span>',
    },
    linkTag : {
      template : '<el-input size="middle" placeholder="请输入对应的网站链接" style="width:200px"></el-input>'
    },
    secondTag : {
      template : '<el-input-number size="small" style="width:100px"></el-input-number>'
    },
    delTag : {
      props : ['idx'],
      template : '<el-button style="float: left;" size="small" type="primary" @click="deletePath">删除</el-button>',
      methods : {
        deletePath(idx){
          this.$emit("delPath", idx);
        },
      }
    }
  },
  methods: methods
  
}
</script>