<template>
  <div>
    <div class="content-wrapper content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 24px;font-weight:blod;">账号编组创建</span>
          <el-button style="float: right;" size="small" type="primary" @click="createGroup">创建</el-button>
        </div>

        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="24">
                <span class="detail-label is-required">帐号编组名称:</span>
                <el-input  placeholder="请输入带有编组特点的名称，少于15字" size="medium" v-model="group_name" style="width:300px">
                </el-input>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-infos control-group">
            <el-row>
              <el-col :span="24">
                <span class="detail-label is-required">账号等级选择:</span>
                <el-checkbox-group v-model="checkedALevels">
                  <el-checkbox v-for="(item, idx) in accountLevel" :key="idx" :label="item"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row>
              <!--
              <el-col :span="8">
                <span class="detail-label is-required">账号特殊要求:</span>
                <el-radio-group v-model="isPlus" @change="">
                  <el-radio class="radio" label="1" size="small">是否是plus会员</el-radio>
                </el-radio-group>
              </el-col>-->
              <el-col :span="24">
                <span class="detail-label-line is-required">plus会员应用比例：</span>
                <el-input-number size="small" v-model="plusRate"></el-input-number> %
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <span class="detail-label-line is-required">账号浏览选择（t-1周日均）:</span>
                <el-checkbox-group v-model="checkedAViews">
                  <el-checkbox v-for="(item, idx) in accountViews" :label="item" :key="idx"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <span class="detail-label-line is-required">账户下单情况（t-1日）:</span>
                <el-checkbox-group v-model="checkedAOrderStatus">
                  <el-checkbox v-for="(item, idx) in accountOrderStatus" :key="idx" :label="item"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <span class="detail-label-line is-required">账户评价情况（t-1周均）:</span>
                <el-checkbox-group v-model="checkedAComments">
                  <el-checkbox v-for="(item, idx) in accountComment" :key="idx" :label="item"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <span class="detail-label-line is-required">账户归属城市:</span>
                <el-checkbox-group v-model="checkedACitys">
                  <el-checkbox v-for="(item, idx) in accountCitys" :key="idx" :label="item"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { ipcRenderer,clipboard } from 'electron'
import { mapGetters, mapActions } from 'vuex'
import methods from './detailJS'

let that
export default {
  name: 'index',
  data () {
    return {
      group_id : 0,
      group_name :  '',
      page : 0,
      creator : 'xxx',
      accountLevel : [],
      checkedALevels : [],
      accountSpecialRequirements : [],
      accountViews : [],
      checkedAViews : [],
      accountOrderStatus : [],
      checkedAOrderStatus : [],
      accountComment : [],
      checkedAComments : [],
      accountCitys : [],
      checkedACitys : [],
      isPlus : '0',
      plusRate : 0,
    }
  },
  components: {
   
  },
  mounted () {
    this.getDetail();
    this.getALevel();
    this.getAView();
    this.getAOrderStatus();
    this.getACommment();
    this.getACitys();
  },
  computed: {
  },
  methods: methods
}
</script>

<style scoped>
#app .el-button--small{
padding:5px 7px;
}
</style>