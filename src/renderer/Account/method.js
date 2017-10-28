import {getAccounts} from '../../api/account'
export default{
        getTableData(){                           //---------------------获取列表数据
            this.$http.get('http://localhost:54903/api/values').then(m=>console.log(m.data));
        }
}