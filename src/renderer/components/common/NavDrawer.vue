<template>
<el-menu default-active="1-4-1" class="el-menu-vertical-main" :collapse="true" theme="dark">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-message"></i>
      <span slot="title">导航一</span>
    </template>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
</el-menu>
</template>

<style>
.el-menu--collapse {
    width: 100%;
    height: 100%;
 }
</style>