<template>
  <div class="index">
      <!-- 告诉二级写在的地方 -->
      <div><router-view></router-view></div>
      <!-- 底部 -->
      <footer>
       <router-link :to="item.url" v-for="(item,index) in arr" :key="index" tag="dl">
         <dt :class="['icon','iconfont',item.icon]"></dt>
         <dd>{{item.title}}</dd>
        </router-link>
      </footer>
  </div>
</template>

<script>
export default {
  //数据
  data(){
    return{
      arr:[
        {
          url:"/index/home",
          title:"首页",
          icon:"icon-shouye"
        },
        {
          url:"/index/classify",
          title:"分类",
          icon:"icon-fenlei"
        },
        {
          url:"/index/car",
          title:"购物车",
          icon:"icon-gouwuche"
        },
        {
          url:"/index/my",
          title:"我的",
          icon:"icon-wode"
        }
      ]
    }
  }
}
</script>

<style>
.index{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.index>div{
  flex: 1;
}
  .index>footer{
    height:50px;
    width:100%;
    display: flex;
    border-top: 1px solid #eee;
  }
  footer dl{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:50px;
    padding:3px 0;
    box-sizing: border-box;
  }
  footer dl dt{
    width:30px;
    height:30px;
    font-size: 24px;
  }
 .index>div{
   flex: 1;
   width:100%;
   overflow: hidden;
 }
</style>