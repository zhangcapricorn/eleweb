<template>
<div>
    <el-menu class="el-menu-vertical-tab1" >
      <!--
      <el-submenu index="1">
        <template slot="title">任务管理旧</template>
        <el-menu-item index="1-1" @click="gotoLink('/task/List')">任务列表</el-menu-item>
        <el-menu-item index="1-2" @click="gotoLink('/task/OrderView')">发布任务</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">订单管理</template>
        <el-menu-item index="2-1" @click="gotoLink('/order/List')">订单列表</el-menu-item>
      </el-submenu>
      -->
      <el-submenu index="2">
        <template slot="title">任务管理</template>
        <el-menu-item index="2-1" @click="gotoLink('/tasks/List')">任务列表</el-menu-item>
        <el-menu-item index="2-1" @click="gotoLink('/tasks/Detail/0')">任务创建</el-menu-item>
      </el-submenu>
      
      <el-submenu index="2">
        <template slot="title">账户管理</template>
        <el-menu-item index="2-1" @click="gotoLink('/account/statistics')">账户统计</el-menu-item>
        <el-menu-item index="2-1" @click="gotoLink('/account/list')">账户编组列表</el-menu-item>
        <el-menu-item index="2-1" @click="gotoLink('/account/detail/0')">账户编组创建</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">浏览路径管理</template>
        <el-menu-item index="2-1" @click="gotoLink('/browserPath/list')">浏览路径列表</el-menu-item>
        <el-menu-item index="2-1" @click="gotoLink('/browserPath/detail/0')">浏览路径创建</el-menu-item>
      </el-submenu>
      
</el-menu>
</div>
</template>

<script>
let that

export default {
  name: 'taskList',
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    gotoLink(link){
        this.$router.push(link)
    }
  }
}
</script>