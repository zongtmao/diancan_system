<template>
  <div class="container">
    <my-header></my-header>
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 路由复用 -->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderGuiderLink"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="historyLink"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="deliveryLink"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  components:{
    myHeader:Header
  }
}
</script>

<style lang="scss">

</style>
