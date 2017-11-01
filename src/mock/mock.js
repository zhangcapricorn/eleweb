import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { TaskLists, Todolists } from "./data/task";
import { BrowserPaths, JDAccounts } from "./data/browserPaths";
let _TaskLists = TaskLists;
let _Todolists = Todolists;
let _BrowserPaths = BrowserPaths;
let _JDAccounts = JDAccounts;

export default {
  bootstrap() {
    let mock = new MockAdapter(axios);
    
    //获取任务列表
	  mock.onGet("/task/List").reply(config => {
      let {page, task} = config.params;
      let mockTaskLists = _TaskLists.filter(task => {
       // if (task_name && task.task_name.indexOf(task_name) == -1) return false;
        return true;
      });
      let total = mockTaskLists.length;
      mockTaskLists = mockTaskLists.filter((u, index) => index < 5 * page && index >= 5 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            TaskLists: mockTaskLists
          }]);
        }, 1000);
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
    mock.onGet("/tasks/todoList/list").reply(config => {
      let {taskId, page} = config.params;
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

    mock.onGet('/tasks/add').reply(config => {
      let { task_name, task_order_num, task_buy_num, each_order_num, task_jd_accounts, task_browser_paths, task_delivery_rate, 
        delivery_from, delivery_to, task_confirm_rate, confirm_from, confirm_to, beginDate, endDatae} = config.params;
      _TaskLists.push({
        task_name : task_name,
        task_order_num:task_order_num,
        task_buy_num:task_buy_num,
        each_order_num:each_order_num,
        task_jd_accounts:task_jd_accounts,
        task_browser_paths : task_browser_paths,
        task_delivery_rate:task_delivery_rate,
        delivery_from:delivery_from,
        delivery_to:delivery_to,
        task_confirm_rate:task_confirm_rate,
        confirm_from:confirm_from,
        confirm_to:confirm_to,
        beginDate:beginDate,
        endDatae:endDatae,
        status : "未开始"
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            message: '新增成功'
          }]);
        }, 500);
      });
    });
	}
}
