import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {Orders} from "./data/order";
let _Order = Orders;

export default {
  bootstrap() {
    let mock = new MockAdapter(axios);
	mock.onGet("/account/List").reply(config => {
      let {page, task} = config.params;
      let mockOrders = _Order.filter(order => {
        if (task && order.task.indexOf(task) == -1) return false;
        return true;
      });
      let total = mockOrders.length;
      mockOrders = mockOrders.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            Orders: mockOrders
          }]);
        }, 1000);
        console.log(Orders);
      });
    });
	}
}
