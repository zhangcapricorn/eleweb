import { addBrowserPath, getBrowserPath } from '../../api/browserPathsApi'
export default {
    getDetail(){
        let path = this.$router.currentRoute.path;
        let browserPathId = path.split("/")[3];
        if(browserPathId != 0){
           let pars = {
                id : browserPathId,
            }
            getBrowserPath(pars).then((res) => {
                let detail = res.data.BrowserPath;
                this.path_name = detail.path_name;
                this.pathsComponent = detail.paths;
                this.paths = detail.paths;
                this.id = detail.id;
            }); 
        }
    },


    //添加新的浏览路径
    insertNewBPath(){
        if(this.path_name == ""){
            alert("请填写浏览路径名称");
        }else if(Object.keys(this.paths).length == 0){
            alert("请添加路径");
        }else if(this.verifyPathsInfo()){
            alert("有空数据，请填写完整");
        } else{
            let pars = {
                id : this.id,
                path_name : this.path_name,
                paths : this.paths,
            }
            addBrowserPath(pars).then((res) => {
                alert(res.data.message);
            }); 
            this.$router.push('/browserPath/list');
        }
    },

    verifyPathsInfo(){ 
        let flag = false;
        for(let key in this.paths){ 
            let value = this.paths[key]; 
            for(let innerkey in value){ 
                let innerValue = value[innerkey];
                if(innerkey === "key"){  
                    if(innerValue.trim().length == 0 || innerValue.trim() == "-"){
                        flag = true;
                    }
                }else{
                    if(innerValue.length == 0 || innerValue == 0){
                        flag = true;
                    }
                }
            }
        }
        return flag;
    },

    //添加新路径
    addNewPath(){
        this.pathsComponent.push({'key':'-', 'value':0});
    },
    //删除路径信息
    doDeletePath(idx, item){
        if(this.paths.hasOwnProperty(idx)){
            delete this.paths[idx];
        }
        this.pathsComponent.splice(idx, 1); 
    },
    //添加路径
    addBrowserPath(idx, inputValue){
        let temp = {};
        if(this.paths.hasOwnProperty(idx)){
            temp = this.paths[idx];
            temp["key"] = inputValue;
        }else{
            temp["key"] = inputValue;
            this.paths[idx] = temp;
        }
        if(!temp.hasOwnProperty("value")){
            temp["value"] = 0;
        }
        this.pathsComponent[idx] = temp;
    },
    //添加路径停留时间
    addBrowserPathTime(idx, inputValue){    
        let time = parseInt(inputValue);
        let temp = {};
        if(isNaN(time)){
            this.$message({
                message: '请输入数字',
                type: 'warning'
            });
            if(this.paths.hasOwnProperty(idx)){
                temp = this.paths[idx];
                temp["value"] = 0;
            }
        }else{
            if(this.paths.hasOwnProperty(idx)){
                temp = this.paths[idx];
                temp["value"] = inputValue;
            }else{
                temp["value"] = inputValue;
                this.paths[idx] = temp;
            }
            if(!temp.hasOwnProperty("key")){
                temp["key"] = "-";
            }
            this.pathsComponent[idx] = temp;
        }  
    },
}