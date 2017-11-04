import { addBrowserPath } from '../../api/browserPathsApi'
export default {
    //添加新的浏览路径
    insertNewBPath(){
        console.log(this.path_name);
        console.log(this.paths);
        if(this.path_name == ""){
            alert("请填写浏览路径名称");
        }else if(Object.keys(this.paths).length == 0){
            alert("请添加路径");
        }else if(this.verifyPathsInfo()){
            alert("有空数据，请填写完整");
        } else{
            let pars = {
            path_name : this.path_name,
            paths : this.paths,
            }
            addBrowserPath(pars).then((res) => {
                alert(res.data.message);
            }); 
        }
        
    },

    verifyPathsInfo(){
        for(let key in this.paths){
            let value = this.paths[key];
            if( key.trim.length == "" || value.trim.length == ""){
                return false;
            }
        }
        return true;
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
        console.log(idx);
        this.pathsComponent[idx] = temp;
        console.log(this.pathsComponent);
        console.log(this.paths);
    },
    //添加路径停留时间
    addBrowserPathTime(idx, inputValue){      
        let temp = {};
        if(this.paths.hasOwnProperty(idx)){
            temp = this.paths[idx];
            temp["time"] = inputValue;
        }else{
            temp["time"] = inputValue;
            this.paths[idx] = temp;
        }
        this.pathsComponent[idx] = temp;
        console.log(this.pathsComponent);
        console.log(this.paths);
    },
}