<template>
  <div class="container">
    <my-header></my-header>
    <div class="main">
      <router-view></router-view>
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
