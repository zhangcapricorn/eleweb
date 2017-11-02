import { getAccountStatistics } from '../../api/accounts'

export default {
    getAStatistics(){
        this.listLoading = true;
        getAccountStatistics().then((res) => {
            this.accountStatistics = res.data.AccountStatistics;
            console.log(this.accountStatistics);
            this.listLoading = false;
        });
    },
}