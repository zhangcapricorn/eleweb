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
               
              <el-row v-for="(item, idx) in pathsComponent" :key="idx" >
                <el-col :span="8">
                  <spanTag :idx="idx"></spanTag>
                 <linkTag :idx="idx" :item="item" @addBPath="addBrowserPath"></linkTag>
                </el-col>
                <el-col :span="8">
                  <span class="detail-label is-required">停留时间:</span>
                  <secondTag :idx="idx" :item="item" @addBPathTime="addBrowserPathTime"></secondTag> 秒
                </el-col>
                <el-col :span="8">
                  <delTag :idx="idx" :item="item" @delPath="doDeletePath"></delTag>
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
      paths : {},
      pathsComponent : [],
      msg : ''
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
      data() {
        return {
          inputValue : '',
        }
      },
      props : ['idx', 'item'],
      template : '<el-input size="middle" v-model="item.key" @blur="onblur(idx)" ref="inputValue" placeholder="请输入对应的网站链接" style="width:200px"></el-input>',
      methods : {
        onblur(idx){
          this.$emit("addBPath", this.idx, this.$refs.inputValue.value);
        }
      }
    },
    secondTag : {
      data() {
        return {
          inputValue : '',
        }
      },
      props : ['idx', 'item'],
      template : '<el-input size="middle" v-model="item.value" @blur="onblur(idx)" ref="inputValue" placeholder="请输入对应的网站链接" style="width:200px"></el-input>',
      methods : {
        onblur(idx){
          console.log(idx);
          let time = parseInt(this.inputValue);
          if(!isNaN(time)){
            this.$emit("addBPathTime", this.idx, this.$refs.inputValue.value);
          }else{
            alert("请输入数字");
          }
        }
      }
    },
    delTag : {
      props : ['idx', 'item'],
      template : '<el-button style="float: left;" size="small" type="primary" @click="deletePath(idx, item)">删除</el-button>',
      methods : {
        deletePath(idx, item){
          this.$emit("delPath", idx);
        },
      }
    }
  },
  methods: methods
  
}
</script>