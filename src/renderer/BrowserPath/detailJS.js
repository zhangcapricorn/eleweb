export default {
    //添加新的浏览路径
    insertNewBPath(){

    },

    //添加新路径
    addNewPath(){
        this.pathNumber = this.pathNumber + 1;
        if(this.pathNumber > 1){
            
        }
    },

    doDeletePath(){
        console.log(this.pathNumber);
        this.pathNumber = this.pathNumber - 1;
        console.log(this.pathNumber);
    },
}