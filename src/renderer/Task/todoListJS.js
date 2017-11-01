import { getTodoLists } from '../../api/taskApi'

export default {
    getTaskID(){
        let path = this.$router.currentRoute.path;
        let taskId = path.split("/")[3];
        this.taskId = taskId;
    },
    //获取任务列表
    getTodoInfo() {
      let para = {
        taskId: this.taskId,
        page:this.page,
        processState: this.processState
      };
      this.listLoading = true;
      getTodoLists(para).then((res) => {
        this.todolist = res.data.Todolists;
        this.formatSatus();
        this.computeNumber();
        this.total = res.data.total;
        this.listLoading = false;
      });
      
    },
    
    //翻页
    handleCurrentChange(val){
      this.page = val;
      this.getTodoInfo();
    },

    //筛选
    filterProcess(){
        this.getTodoInfo();
    },
    //将状态id转为中文名称
    formatSatus(){
      let pS = 0;
      for(let i = 0, size = this.todolist.length; i < size; i++){
        pS = this.todolist[i]["processState"];
        console.log();
        if(pS == 1){
          this.todolist[i]["process"] = "未付款";
        }else if(pS == 2){
          this.todolist[i]["process"] = "确认收货";
        }else{
          this.todolist[i]["process"] = "完成";
        }
      }
    },
    computeNumber(){
      for(let i = 0, size = this.todolist.length; i < size; i++){
        if(this.todolist[i]["processState"] == 1){
          this.unPayfor += 1;
        }else if(this.todolist[i]["processState"] == 2){
          this.unDelivery +=1;
        }else{
          this.finished += 1;
        }
      }
    }
}