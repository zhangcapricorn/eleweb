<template>
  <div id="app">
   <el-row>
   <el-col :span="24"> <win-top></win-top></el-col>
   </el-row>
    <el-row>
      <el-col>
        <!--div class="main-left"><app-nav /></div -->
        <div class="el-content main-body" :class="{'nav-hide': !navOpen, 'home-page': isHomePage}">
        <el-row>
            <el-col :span="4">
                <menu-tab></menu-tab>
            </el-col>
            <el-col :span="20">
              <router-view></router-view>
            </el-col>
        </el-row>
        </div>
      </el-col>
    </el-row>
     <el-row>
       <el-col :span="24"> <win-footer></win-footer></el-col>
     </el-row>
  </div>
</template>

<script>
import AppNavDrawer from './components/common/NavDrawer'
import WindowTop from './components/common/WindowTop'
import WindowFooter from './components/common/WindowFooter'
import MenuTab from './components/common/MenuTab'
import { mapGetters } from 'vuex'

export default {
  data () {
    const desktop = isDesktop()
    return {
      open: desktop,
      docked: desktop,
      desktop: desktop,
      title: '',
      leftBottom: {horizontal: 'left', vertical: 'bottom'},
      rightBottom: {horizontal: 'right', vertical: 'bottom'}
    }
  },
  computed: {
    isHomePage () {
      return this.$route.fullPath === '/'
    },
    ...mapGetters({
      navOpen: 'getNavOpen'
    })
  },
  mounted () {
    this.routes = this.$router.options.routes
    this.setTitle()
    this.changeNav()
    this.handleResize = () => {
      this.changeNav()
    }
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('hashchange', () => {
      this.setTitle()
    })
  },
  methods: {
    changeNav () {
      const desktop = isDesktop()
      this.docked = desktop
      if (desktop === this.desktop) return
      if (!desktop && this.desktop && this.open) {
        this.open = false
      }
      if (desktop && !this.desktop && !this.open) {
        this.open = true
      }
      this.desktop = desktop
    },
    handleMenuChange (path) {
      if (!this.desktop) this.open = false
    },
    setTitle () {
      let path = window.location.hash
      if (path && path.length > 1) path = path.substring(1)
      for (let i = 0; i < this.routes.length; i++) {
        var route = this.routes[i]
        if (route.path === path) {
          this.title = path.substring(1) || ''
          return
        }
      }
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  components: {
    'app-nav': AppNavDrawer,
    'win-top': WindowTop,
    'win-footer':WindowFooter,
    'menu-tab':MenuTab
  }
}

function isDesktop () {
  return window.innerWidth > 993
}
</script>
<style lang="less">
.content-wrapper{
  padding: 0px;
  height: 552px;
  overflow:hidden;
}
</style>
