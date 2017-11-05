import { getGroupList, getAccountLevel, getAccountViews, getAccountOrderStatus, getAccountComment, getAccountCitys, addGroup, getGroupDetail } from '../../api/accounts'

export default {
    //得到帐号编组的详情
    getDetail(){
        let path = this.$router.currentRoute.path;
        let groupId = path.split("/")[3];
        if(groupId != 0){
            let pars = {
                id:groupId,
            }
            getGroupDetail(pars).then((res) => {
                let detail = res.data.Group;
                console.log(detail);
                this.group_id = detail.id;
                this.group_name = detail.group_name;
                this.checkedALevels = detail.account_levels;
                this.checkedAViews = detail.account_views;
                this.checkedAOrderStatus = detail.account_order_status;
                this.checkedAComments = detail.account_comments;
                this.checkedACitys = detail.account_citys;
                this.plusRate = detail.plus_rate;
            });
        }
    },
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
        this.$router.push('/account/list');
    }
}