import { getGroupList, deleteGroup } from '../../api/accounts'

export default {
    getGList(){
        let pars = {
            group_name : this.filters.group_name,
            group_id : this.filters.group_id,
            page : this.page,
            creator : this.filters.creator
        };
        this.listLoading = true;
        getGroupList(pars).then((res) => {
            this.groups = res.data.Groups;
            this.total = res.data.total;
            this.listLoading = false;
        });
    },
    //翻页
    handleCurrentChange(val){
      this.page = val;
      this.getGList();
    },
    searchGroup(){
        this.getGList();
    },
    editGroup(index, row) {
      let link = "/account/detail/" + row.id;
      this.$router.push(link);
    },
    delGroup(index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
            type: 'warning'
        }).then(() => {
            this.listLoading = true;
            //NProgress.start();
            let para = { id: row.id };
            deleteGroup(para).then((res) => {
                this.listLoading = false;
                //NProgress.done();
                this.$message({
                    message: '删除成功',
                    type: 'success'
                });
                this.getGList();
            });
        }).catch(() => {

        });
    }
}