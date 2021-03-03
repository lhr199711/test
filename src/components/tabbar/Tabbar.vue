<template>
  <div class="tabbar-nav">
    <router-link tag='p' to='/movie'><i class="iconfont">&#xe65b;</i> 电影</router-link>
    <router-link tag='p' to='/cinema'><i class="iconfont">&#xe625;</i> 影院</router-link>
    <router-link tag='p' to='/mine'><i class="iconfont">&#xe651;</i> 我的</router-link>
  </div>
</template>

<script>
export default {
    name : 'Tabbar',
}
</script>

<style lang="scss" scoped>
  .tabbar-nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    border-top: 1px solid #aaa;
    display: flex;
    >p {
      text-align: center;
      flex: 1;
      font-size: .48rem;
      height: 1.333rem;
      line-height: 1.333rem;
    }
    .router-link-active {
      color: red;
    }
  }
</style>