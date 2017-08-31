<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <div @touchstart="toPage('/')" :class="{'router-link-exact-active': $route.path=='/'}">
        <i class="icon iconfont icon-wxbzhuye"></i>
        <span>主页</span>
      </div> 
      <div @touchstart="toPage('/news')" :class="{'router-link-exact-active': $route.path=='/news'}">
        <i class="icon iconfont icon-news"></i>
        <span>新闻</span>
      </div> 
      <div @touchstart="toPage('/movie')" :class="{'router-link-exact-active': $route.path=='/movie'}">
        <i class="icon iconfont icon-upload-demo"></i>
        <span>电影</span>
      </div> 
      <div @touchstart="toPage('/person')" :class="{'router-link-exact-active': $route.path=='/person'}">
        <i class="icon iconfont icon-person"></i>
        <span>个人</span>
      </div> 
    </footer>
  </div>
</template>

<script>
export default {
  methods:{
    toPage(str){
      this.$router.push(str);
    }
  },
  created(){

  }
}
</script>

<style lang="scss">
  @import "./assets/css/_mixin.scss";
  html, body {
    width: 100%;
    min-height: 100%;
    background-color: #ccc;
  }
  footer {
    background: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    @include px2rem(height, 100px)
    position: fixed;
    left: 0;
    bottom: 0;
    div {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #555;
      i {
         text-decoration: none;
         @include font-dpr(16px);
      }
      span {
        display: inline-block;
        text-decoration: none;
        @include font-dpr(14px);      

      }
    }
    div.router-link-exact-active {
      text-decoration: none;
      color: red;
    }
    div:active {
      text-decoration: none;
      background: #5e5e5e;
    }

  }
</style>
