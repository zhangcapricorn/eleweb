import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Tasks } from "./data/task";
import { BrowserPaths } from "./data/browserPaths";
let _Tasks = Tasks;
let _BrowserPaths = BrowserPaths;

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
	}
}
