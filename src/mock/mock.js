import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Tasks, Todolists } from "./data/task";
import { BrowserPaths, JDAccounts } from "./data/browserPaths";
let _Tasks = Tasks;
let _Todolists = Todolists;
let _BrowserPaths = BrowserPaths;
let _JDAccounts = JDAccounts;

export default {
  bootstrap() {
    let mock = new MockAdapter(axios);
    
    //获取任务列表
	  mock.onGet("/task/List").reply(config => {
      let {page, task} = config.params;
      let mockTask = _Tasks.filter(task => {
       // if (task_name && task.task_name.indexOf(task_name) == -1) return false;
        return true;
      });
      let total = mockTask.length;
      mockTask = mockTask.filter((u, index) => index < 5 * page && index >= 5 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            Tasks: mockTask
          }]);
        }, 1000);
        //console.log(Tasks);
      });
    });

    //获取浏览路径
    mock.onGet("/browserPaths/List").reply(config => {
      let mockBrowserPaths = _BrowserPaths;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            BrowserPaths: mockBrowserPaths
          }]);
        }, 1000);
      });
    });

    //获取京东帐号
    mock.onGet("/jdAccounts/List").reply(config => {
      let mockJDAccounts = _JDAccounts;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            JDAccounts: mockJDAccounts
          }]);
        }, 1000);
      });
    });

    //获取任务清单
    mock.onGet("/tasks/todoList").reply(config => {
      let {taskId, page} = config.params;
      console.log(Todolists);
      let mockTodolists = _Todolists;
      let total = mockTodolists.length;
      mockTodolists = mockTodolists.filter((u, index) => index < 5 * page && index >= 5 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total : total,
            Todolists: mockTodolists
          }]);
        }, 1000);
      });
    });
	}
}
