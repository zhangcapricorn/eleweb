import { getAccounts } from '../../api/account'
import { BaseURL, axios } from '../../api/config';

// let apidata = axios.get(`${BaseURL}/account`).then( function (response) {
//     console.log(response);
//     return response.data;
//   })
// console.log(apidata);
var account = JSON.stringify(getAccounts());
console.log(account);
console.log(this.$http);

var orders = getUsers() {
        let para = {
          page: 0,
          task: ""
        };
        getAccounts(para).then((res) => {
        console.log("ttt");
          this.orders = res.data.orders;
          console.log(this.orders);
        });
      },
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