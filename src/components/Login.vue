<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../../src/assets/logo.png" alt="">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>

                        <button type="submit" class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'
    
    export default{
        data(){
            return{
                email:'',
                password:''
            }
        },
        beforeRouteEnter:((to, from, next) => {
            next(vm => {
                vm.$store.dispatch("setLoginUser",null);
            })
        }),
        methods:{
            onSubmit(){
                axios.get('/user.json')
                     .then((res) => {
                        let data = res.data;
                        let users = [];
                        for(let user in data){
                            users.push(data[user]);
                        }
                        let result = users.filter((user) => {
                            return user.email === this.email && user.password === this.password
                        })
                        if(result && result.length > 0){
                            this.$store.dispatch("setLoginUser",result[0].email);
                            this.$router.push({name:'homeLink'});
                        }else{
                            this.$store.dispatch("setLoginUser",null);
                            alert("用户名或密码错误")
                        }
                     })
            }
        }
    }
</script>