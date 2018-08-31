<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- 新增 -->
            <add-new-pizza></add-new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!-- 品种展示 -->
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in this.menuItems" :key="item.id">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>
                            <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">
                                &times;
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

    import NewPizza from './NewPizza.vue'

    export default{
        data(){
            return{
                menuItems:[]
            }
        },
        components:{
            addNewPizza : NewPizza
        },
        created(){
            fetch("https://wd1412916864xhlvtc.wilddogio.com/menu.json")
                 .then(res => {
                     return res.json();
                 })
                 .then(data => {
                    let menuLists = [];
                    for(let key in data){
                        data[key].id = key;
                        menuLists.push(data[key]);
                    }
                    this.menuItems = menuLists;
                 })
        },
        methods:{
            deleteData(item){
                fetch("https://wd1412916864xhlvtc.wilddogio.com/menu/"+ item.id +"/.json",{
                    method:'DELETE',
                    headers:{
                        "Content-type":'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => this.$router.push({name:'menuLink'}))
                .catch(err => console.log(err))
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