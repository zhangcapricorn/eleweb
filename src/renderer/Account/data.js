import { getAccounts } from '../../api/account'
import { BaseURL, axios } from '../../api/config';
// let apidata = axios.get(`${BaseURL}/account`).then( function (response) {
//     console.log(response);
//     return response.data;
//   })
// console.log(apidata);
var account = JSON.stringify(getAccounts());
console.log(account);
console.log(getAccounts());

var accounts = [
               {
                studentNo:'2111847',
                studentName:'小明',
               },
               {
                studentNo:'2111847',
                studentName:'小明',
               }
            ]
export default{

    init:function(){ 
        return{
            studentData:accounts,
            input1 : "",
            input2 : "",
            input3 : "",
            value6 : ""
        }
    }
}