import { getGroupList, getAccountLevel, getAccountViews, getAccountOrderStatus, getAccountComment, getAccountCitys, addGroup } from '../../api/accounts'

export default {
    //得到帐号等级
    getALevel(){
        getAccountLevel().then((res) => {
            this.accountLevel = res.data.AccountLevel;
        });
    },
    //得到帐号浏览选择
    getAView(){
        getAccountViews().then((res) => {
            this.accountViews = res.data.AccountViews;
        });
    },
    //得到帐号下单情况
    getAOrderStatus(){
        getAccountOrderStatus().then((res) => {
            this.accountOrderStatus = res.data.AccountOrderStatus;
        });
    },
    //得到帐号下单情况
    getACommment(){
        getAccountComment().then((res) => {
            this.accountComment = res.data.AccountComment;
        });
    },
    //得到帐号下单情况
    getACitys(){
        getAccountCitys().then((res) => {
            this.accountCitys = res.data.AccountCitys;
        });
    },
    createGroup(){
        let pars = {
            group_name : this.group_name,
            group_id : this.group_id,
            creator : this.creator,
            account_levels : this.checkedALevels,
            account_views : this.checkedAViews,
            account_order_status : this.checkedAOrderStatus,
            account_comments : this.checkedAComments,
            account_citys : this.checkedACitys,
            plusRate : this.plusRate
        };
        addGroup(pars).then((res) => {
            alert(res.data.message);
        });
    }
}