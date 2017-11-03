import { getBrowserPathsList, deleteBrowserPath } from '../../api/browserPathsApi'

export default {
    getBPList(){
        let pars = {
            group_name : this.filters.path_name,
            id : this.filters.id,
            page : this.page,
            creator : this.filters.creator
        };
        this.listLoading = true;
        getBrowserPathsList(pars).then((res) => {
            this.browserPaths = res.data.BrowserPaths;
            this.total = res.data.total;
            this.listLoading = false;
        });
    },
    //翻页
    handleCurrentChange(val){
      this.page = val;
      this.getBPList();
    },
    searchGroup(){
        this.getBPList();
    },
    editBPath(index, row) {
      let link = "/browserPath/detail/" + row.id;
      this.$router.push(link);
    },
    delBPath(index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
            type: 'warning'
        }).then(() => {
            this.listLoading = true;
            //NProgress.start();
            let para = { id: row.id };
            deleteBrowserPath(para).then((res) => {
                this.listLoading = false;
                //NProgress.done();
                this.$message({
                    message: '删除成功',
                    type: 'success'
                });
                this.getBPList();
            });
        }).catch(() => {

        });
    }
}