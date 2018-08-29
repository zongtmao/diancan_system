<template>
    <h1>Admin</h1>
</template>

<script>
    export default{
        data(){
            return{
                name:"Maomao"
            }
        }
        // 组件内守卫
        // beforeRouteEnter:(to, from, next) => {

        //     //数据加载完再执行
        //     next(vm =>{
        //         alert("hello "+ vm.name);
        //     })
        // }
        // beforeRouteLeave (to, from, next) {
        //     if(confirm("确定要离开吗") == true){
        //         next();
        //     } else {
        //         next(false);
        //     }
        // }
    }
</script>