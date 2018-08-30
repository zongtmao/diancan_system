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
                    <tbody v-for="item in baskets" :key="item.name">
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

                <p> 总价：</p>
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
    export default{
        data(){
            return{
                baskets:[],
                basketsText:'购物车里没有任何商品，快去添加吧',
                getMenuItems:{
                    1: {
                        'name': '榴莲pizza',
                        'description': '这是喜欢吃榴莲朋友的最佳选择',
                        'options': [{
                        'size': 9,
                        'price': 38
                        }, {
                        'size': 12,
                        'price': 48
                        }]
                    },
                    2: {
                        'name': '芝士pizza',
                        'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
                        'options': [{
                        'size': 9,
                        'price': 38
                        }, {
                        'size': 12,
                        'price': 48
                        }]
                    },
                    3: {
                        'name': '夏威夷pizza',
                        'description': '众多人的默认选择',
                        'options': [{
                        'size': 9,
                        'price': 36
                        }, {
                        'size': 12,
                        'price': 46
                        }]
                    }
                }
            }
        },
        methods:{
            getToBasket(item, option){
                this.baskets.push({
                    name:item.name,
                    price:option.price,
                    size:option.size,
                    count:1
                })
            },
            decCount(item){
                item.count--;
            },
            addCount(item){
                item.count++;
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
