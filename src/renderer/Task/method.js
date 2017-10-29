import {getAccounts} from '../../api/account'
export default{
    getOrders() {
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
}