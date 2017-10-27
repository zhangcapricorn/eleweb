<template>
  <div class="win-top" style="display:none">
   <header id="navigation">
   <h1>EleJD</h1>
    <div class="quick-menu fr">
      <ul class="nav nav-pills">
        <li><span class="el-nav-icon">
        <el-popover placement="bottom" width="200" trigger="hover">
        <ul class="el-menu el-setting">
        <li class="el-menu-item" @click="dialogVisible = true">帮助</li>
        </ul>
      <i slot="reference" class="el-icon-setting"></i>
      </el-popover></span></li>
      </ul>
    </div>
   </header>
    <div class="line"></div>

    <el-dialog title="提示" :visible.sync="dialogVisible" size="large">
      <span style="width:300px">
        .代理精灵非连接状态下启动软件<br/>
        .点击软件底部会自动获取当前代理ip<br/>
        .双击账号/密码执行复制
        .导入账号格式: 账号----密码 每行一个 例如<br/>
          13100000000----123456<br/>
          13100000001----123456<br/>

      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      dialogVisible:false
    }
  },
  methods: {
    clickHelp(){

    }
  },
  components: {
  },
  computed: {
    ...mapGetters({
      navOpen: 'getNavOpen'
    })
  }
  
}
</script>

