<template>
<div id="footer" @click="reloadProxyIP">IP: {{getLocalIP}} | 代理ip:{{getProxyIP}}</div>
</template>

<script>
import { ipcRenderer } from 'electron'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
  	reloadProxyIP(){
  		this.setProxyIP('')
  		ipcRenderer.send('sync-reload-ip')
  	},
  	...mapActions([
      'setLocalIP',
      'setProxyIP'
    ])
  },
  mounted(){
  	ipcRenderer.on('set-local-ip',(event,ip)=>{
      this.setLocalIP(ip)
    })
    ipcRenderer.on('set-proxy-ip',(event,ip)=>{
      this.setProxyIP(ip)
    })

  },
  computed: {
    ...mapGetters({
      getLocalIP: 'getLocalIP',
      getProxyIP: 'getProxyIP'
    })
  }
  
}
</script>