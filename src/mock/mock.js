import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Task, TaskLists, Todolists } from "./data/task";
import { BrowserPaths, BrowserPath } from "./data/browserPaths";
import { Groups, Group, AccountLevel, AccountViews, AccountOrderStatus, AccountComment, AccountCitys, AccountStatistics } from "./data/accounts";
let _Task = Task;
let _TaskLists = TaskLists;
let _Todolists = Todolists;
let _BrowserPaths = BrowserPaths;
let _BrowserPath = BrowserPath;
let _Groups = Groups;
let _Group = Group;
let _AccountLevel = AccountLevel;
let _AccountViews = AccountViews;
let _AccountOrderStatus = AccountOrderStatus;
let _AccountComment = AccountComment;
let _AccountCitys = AccountCitys;
let _AccountStatistics = AccountStatistics;

let _PageNum = 10;

export default {
  bootstrap() {
    let mock = new MockAdapter(axios);
    
    //获取任务详情
    mock.onGet("/tasks/detail").reply(config => {
      let { id } = config.params;
      let mockTask = _Task;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            Task: mockTask
          }]);
        }, 1000);
      });
    });

    //获取任务列表
	  mock.onGet("/task/List").reply(config => {
      let {page, task} = config.params;
      let mockTaskLists = _TaskLists.filter(task => {
       // if (task_name && task.task_name.indexOf(task_name) == -1) return false;
        return true;
      });
      let total = mockTaskLists.length;
      mockTaskLists = mockTaskLists.filter((u, index) => index < _PageNum * page && index >= _PageNum * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            TaskLists: mockTaskLists
          }]);
        }, 1000);
      });
    });

    //获取浏览路径详情
    mock.onGet("/browserPaths/detail/").reply(config => {
      let { id} = config.params;
      let mockBrowserPath = _BrowserPath;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            BrowserPath: mockBrowserPath
          }]);
        }, 1000);
      });
    });

    //获取浏览路径
    mock.onGet("/browserPaths/List").reply(config => {
      let { page, id, path_name, creator } = config.params;
      let mockBrowserPaths = _BrowserPaths;
      let total = mockBrowserPaths.length;
      mockBrowserPaths = mockBrowserPaths.filter((u, index) => index < _PageNum * page && index >= _PageNum * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            BrowserPaths: mockBrowserPaths
          }]);
        }, 1000);
      });
    });

    //删除用户
    mock.onGet('/browserPaths/delete').reply(config => {
      let { id } = config.params;
      _BrowserPaths = _BrowserPaths.filter(u => u.id !== id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    mock.onGet('/browserPaths/add').reply(config => {
      let { path_name, paths} = config.params;
      _BrowserPaths.push({
        path_name : path_name,
        paths : paths
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

    //获取任务清单
    mock.onGet("/tasks/todoList/list").reply(config => {
      let {taskId, page} = config.params;
      let mockTodolists = _Todolists;
      let total = mockTodolists.length;
      let unPayfor = 0;
      let unDelivery = 0;
      let finished = 0;
      for(let i = 0, size = mockTodolists.length; i < size; i++){
        if(mockTodolists[i]["processState"] == 1){
          unPayfor += 1;
        }else if(mockTodolists[i]["processState"] == 2){
          unDelivery +=1;
        }else{
          finished += 1;
        }
      }
      mockTodolists = mockTodolists.filter((u, index) => index < _PageNum * page && index >= _PageNum * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total : total,
            Todolists: mockTodolists, 
            unPayfor : unPayfor,
            unDelivery:unDelivery,
            finished:finished
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

    //获取group详情
    mock.onGet("/account/detail/").reply(config => {
      let { id} = config.params;
      let mockGroup = _Group;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            Group: mockGroup
          }]);
        }, 1000);
      });
    });

    //获取账号等级
    mock.onGet("/account/level").reply(config => {
      let mockAccountLevel = _AccountLevel;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            AccountLevel: mockAccountLevel
          }]);
        }, 1000);
      });
    });

    //获取账号浏览选择
    mock.onGet("/account/views").reply(config => {
      let mockAccountViews = _AccountViews;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            AccountViews: mockAccountViews
          }]);
        }, 1000);
      });
    });

    //获取账号下单情况
    mock.onGet("/account/orderStatus").reply(config => {
      let mockAccountOrderStatus = _AccountOrderStatus;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            AccountOrderStatus: mockAccountOrderStatus
          }]);
        }, 1000);
      });
    });

    //获取账号评论情况
    mock.onGet("/account/comment").reply(config => {
      let mockAccountComment = _AccountComment;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            AccountComment: mockAccountComment
          }]);
        }, 1000);
      });
    });

    //获取账号所属城市
    mock.onGet("/account/citys").reply(config => {
      let mockAccountCitys = _AccountCitys;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            AccountCitys: mockAccountCitys
          }]);
        }, 1000);
      });
    });

    mock.onGet('/group/add').reply(config => {
      let { group_name, group_id, creator, account_levels, account_views, account_order_status, account_comments, account_citys, plusRate} = config.params;
      _Groups.push({
        group_name : group_name,
        group_id:group_id,
        creator:creator,
        account_levels : account_levels,
        account_views : account_views,
        account_order_status : account_order_status,
        account_comments : account_comments,
        account_citys : account_citys,
        plusRate : plusRate
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

    //获取编组列表
    mock.onGet("/group/List").reply(config => {
      let {page, groupName, groupId, creator,} = config.params;
      let mockGroups = _Groups.filter(task => {
       // if (task_name && task.task_name.indexOf(task_name) == -1) return false;
        return true;
      });
      let total = mockGroups.length;
      mockGroups = mockGroups.filter((u, index) => index < _PageNum * page && index >= _PageNum * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            Groups: mockGroups
          }]);
        }, 1000);
      });
    });

    //删除用户
    mock.onGet('/group/delete').reply(config => {
      let { id } = config.params;
      _Groups = _Groups.filter(u => u.id !== id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //获取编组统计信息
    mock.onGet("/group/statistics").reply(config => {
      let mockAccountStatistics = _AccountStatistics;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            AccountStatistics: mockAccountStatistics
          }]);
        }, 1000);
      });
    });
	}
}
