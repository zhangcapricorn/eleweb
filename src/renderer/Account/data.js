import { getAccounts } from '../../api/account'
import { BaseURL, axios } from '../../api/config';

// let apidata = axios.get(`${BaseURL}/account`).then( function (response) {
//     console.log(response);
//     return response.data;
// //   })
// // console.log(apidata);
// var account = JSON.stringify(getAccounts());
// console.log(account);
// console.log(this.$http);
let ordersdd = [];
function getOrders() {
    let para = {
      page: 1,
    };
    getAccounts(para).then((res) => {
    console.log("ttt");
      this.ordersdd = res.data.orders;
      console.log(this.ordersdd);
    });
 };
 
export default{

    init:function(){ 
        return {
            orders : orders,
            counter: 0,
            page : 1,
            filters: {
              task: ''
            },
        }
    }
}