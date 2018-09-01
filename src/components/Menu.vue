<template>
    <div class="container row">
        <!-- 菜单 -->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入购物车</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.price">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td><button @click="getToBasket(item, option)" class="btn btn-sm btn-outline-success">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 购物车 -->
        <div class="col-md-4 col-sm-12">
            <div v-if="this.baskets.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>数量</th>
                            <th>品种</th>
                            <th>价格</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in baskets" :key="item.index">
                        <tr>
                            <td>
                                <button @click="decCount(item)" class="btn btn-sm">-</button>
                                <span>{{item.count}}</span>
                                <button @click="addCount(item)" class="btn btn-sm">+</button>
                            </td>
                            <td>{{item.name}}--{{item.size}}</td>
                            <td>{{item.price * item.count}} 元</td>
                        </tr>
                    </tbody>
                </table>

                <p> 总价：{{totalMoney}}RMB</p>
                <button class="btn btn-success btn-block">提交</button>
            </div>
            <!-- 如果购物车没有数据时 -->
            <div class="no-shopping" v-else>
                {{basketsText}}
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                baskets:[],
                basketsText:'购物车里没有任何商品，快去添加吧',
                // getMenuItems:{}
            }
        },
        computed:{
            getMenuItems(){
                // 获取vuex中的数据
                // return this.$store.state.menuItems;
                // 使用getters获取数据，这样menuItems就不会暴露到外界了
                return this.$store.getters.getMenuItems;
            },
            totalMoney(){
                let total = 0;
                
                for(let index in this.baskets){
                    let shoppingItem = this.baskets[index];
                    total += shoppingItem.count * shoppingItem.price;
                }

                return total;
            }
        },
        created(){
            this.getMenuDetail();
        },
        methods:{
            getToBasket(item, option){
                let basket = {
                    name:item.name,
                    price:option.price,
                    size:option.size,
                    count:1
                }
                if(this.baskets.length > 0){
                    // 过滤重复的数据
                    let filterResult = this.baskets.filter((basket) => {
                        return basket.name === item.name && basket.price === option.price
                    });

                    filterResult != null && filterResult.length > 0 ? filterResult[0].count++ : this.baskets.push(basket);
                       
                } else {
                    this.baskets.push(basket);
                }
            },
            decCount(item){
                item.count--;
                if(item.count <=0){
                    this.removeBasket(item);
                }
            },
            addCount(item){
                item.count++;
            },
            removeBasket(item){
                this.baskets.splice(this.baskets.indexOf(item),1);
            },
            getMenuDetail(){
                axios.get("menu.json")
                     .then(res => {
                        //  改变vuex中的状态
                        this.$store.commit("setMenuItems",res.data);
                     })
            }
        }
    }
</script>

<style>
    .no-shopping{
        margin-top: 100px;
        text-align: center;
        font-size: 18px;
    }
</style>
