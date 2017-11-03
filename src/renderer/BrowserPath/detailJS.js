import { addBrowserPath } from '../../api/browserPathsApi'
export default {
    //添加新的浏览路径
    insertNewBPath(){
        if(this.path_name == ""){
            alert("请填写浏览路径名称");
        }else if(Object.keys(this.paths).length == 0){
            alert("请添加路径");
        }else{
            let pars = {
            path_name : this.path_name,
            paths : this.paths,
            }
            addBrowserPath(pars).then((res) => {
                alert(res.data.message);
            }); 
        }
        
    },

    //添加新路径
    addNewPath(){
        this.pathNumber = this.pathNumber + 1;
    },

    doDeletePath(){
        this.pathNumber = this.pathNumber - 1;
    },
    addBrowserPath(idx, inputValue){
        let temp = {};
        if(this.paths.hasOwnProperty(idx)){
            temp = this.paths[idx];
            temp["key"] = inputValue;
        }else{
            temp["key"] = inputValue;
            this.paths[idx] = temp;
        }
        console.log(this.paths);
    },
    addBrowserPathTime(idx, inputValue){
        let time = parseInt(inputValue);
        if(!isNaN(time)){
            let temp = {};
            if(this.paths.hasOwnProperty(idx)){
                temp = this.paths[idx];
                temp["time"] = inputValue;
            }else{
                temp["time"] = inputValue;
                this.paths[idx] = temp;
            }
            console.log(this.paths);
        }else{
            alert("请输入数字");
        }
        
    },
}