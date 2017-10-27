<template>
	<div>background</div>
</template>

<script>
import { ipcRenderer,clipboard,remote } from 'electron'
import { mapGetters, mapActions } from 'vuex'
const Promise = require('bluebird')
const fs = require('fs')

let that
console.log('bg pid：', process.pid)

export default {
  name: 'bg',
  data () {
    return {
    }
  },
  mounted () {
    ipcRenderer.on('sync-addUserByFile', (event, arg) => {
    	let userListArr = []
    	const d = new Date()
	      let time = ''
	      time = d.getFullYear()
	      time += '.'
	      time += d.getMonth() + 1
	      time += '.'
	      time += d.getDate()
	  	fs.readFile(arg.file,"utf8",function (error,data){
	     	let userArr = []
	     	userArr = data.split('\r\n')
	     	
	     	let userLength = userArr.length
	     	if(userLength > 0) {
	     		userArr.forEach(function(item,index){
		          let itemArr = []
	     			if(item.indexOf('----') > 0){
	     				itemArr = item.split('----')
	     				userListArr.push({'username':itemArr[0],phone:'',pwd:itemArr[1],date:time,address:'',name:'',ip:'',order:''})
	     			}
		        })
	     	}

	     	event.sender.send('sync-addUser-done',userListArr)
	    })
    })
    ipcRenderer.on('add-proxy-provice', (event, arg) => {
      this.proviceList = arg.lines
    })
  },
  computed: {
    ...mapGetters({
      getNconf: 'getNconf'
    })
  },
  methods: {
    ...mapActions([
      'setNconf'
    ])
  }
}
</script>