import { getTaskLists } from '../../api/taskApi'

export default {
    //获取任务列表
    getTasksListInfo() {
      let para = {
        page: this.page,
        id: this.filters.id,
        task_name:this.filters.task_name,
        skuid:this.filters.skuid,
        date:this.filters.date,
        status:this.filters.status
      };
      this.listLoading = true;
      getTaskLists(para).then((res) => {
        this.tasks = res.data.TaskLists;
        this.total = res.data.total;
        let pS = 0;
        for(let i = 0, size = this.tasks.length; i < size; i++){
          pS = this.tasks[i]["statusId"];
          console.log();
          if(pS == 1){
            this.tasks[i]["status"] = "未开始";
          }else if(pS == 2){
            this.tasks[i]["status"] = "执行中";
          }else if(pS == 3){
            this.tasks[i]["status"] = "待付款";
          }else if(pS == 4){
            this.tasks[i]["status"] = "待评价";
          }else{
            this.tasks[i]["status"] = "完成";
          }
        }
        this.listLoading = false;
      });
    },
    //编辑任务信息，跳转到任务详情页面
    editTask(index, row) {
      let link = "/tasks/Detail/" + row.id;
      this.$router.push(link);
    },
    //查看任务清单，跳转到任务清单页面
    gotoTaskTodoList(index, row){
      let link = "/tasks/todoList/" + row.id;
      this.$router.push(link);
    },
    //翻页
    handleCurrentChange(val){
      this.page = val;
      this.getTasksListInfo();
    },
    //查询
    searchTask(){
      this.getTasksListInfo();
    }
}