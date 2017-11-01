import { getBrowserPathsList, getJDAccountList } from '../../api/browserPathsApi'
import { addNewTask } from '../../api/taskApi'

export default {
    //获取浏览路径
    getBrowserPaths(){
      getBrowserPathsList().then((res) => {
        this.browser_paths = res.data.BrowserPaths;
      });
    },
    //获取浏览路径
    getJDAccounts(){
      getJDAccountList().then((res) => {
        this.jd_accounts = res.data.JDAccounts;
      });
    },
    //保存选择的浏览路径
    saveBrowserPath(){
      if(this.task_browser_paths.length > 10){
        alert("超过长度设置");
      }else if(this.the_browser_path != ""){
        this.task_browser_paths.push(this.the_browser_path);
        this.browser_paths_conditions.push(this.the_browser_path);
      }else{
        alert("请选择浏览路径");
      }
    },
    //保存所选择账号组
    saveAccountGroups(){
      if(this.task_jd_accounts.length > 10){
        alert("超过长度设置");
      }else if(this.the_jd_account != ""){
        this.task_jd_accounts.push(this.the_jd_account);
        this.jd_account_conditions.push(this.the_jd_account);
      }else{
        alert("请选择账号组");
      }
    },
    //删除添加的账号组件
    spliceAccounts(idx){
      this.task_jd_accounts.splice(idx, 1); 
      this.jd_account_conditions.splice(idx, 1); 
    },
    //删除添加的路径组件
    spliceBrowsers(idx){
      this.task_browser_paths.splice(idx, 1); 
      this.browser_paths_conditions.splice(idx, 1); 
    },
    //添加新任务
    insertNewTask(){
      let para = {
        task_name : this.task_name,
        task_order_num : this.task_order_num,
        task_buy_num : this.task_buy_num,
        each_order_num : this.each_order_num,
        task_jd_accounts : this.task_jd_accounts,
        task_browser_paths : this.task_browser_paths,
        task_delivery_rate : this.task_delivery_rate,
        delivery_from : this.delivery_from,
        delivery_to : this.delivery_to,
        task_confirm_rate : this.task_confirm_rate,
        confirm_from : this.confirm_from,
        confirm_to : this.confirm_to,
        beginDate : this.beginDate,
        endDatae : this.endDatae
      };
      addNewTask(para).then((res) => {
        this.message = res.data.message;
        alert(this.message);
      });
    }
}