<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header">
      <Header :name="name"></Header>
    </div>
    <!-- 地址搜索框 -->
    <div class="address">
      <input type="text" placeholder="请输入地址">
    </div>
    <!-- 轮播图 -->
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="item.image" alt="">
        </div>
    </div>
    <div class="swiper-pagination"></div>
    </div>
    <!-- 列表 -->
    <div class="scroll">
       <div>
          <Item v-for="(item,index) in list" :key="index" :item="item"></Item>
          <!-- 判断数据加载到低是否出现    show-->
          <div v-if="show" class="foot">********到底拉********</div>
       </div>
    </div>
  </div>
</template>

<script>
//头部组件
import Header from '../../../components/header.vue'
//从api里引入banner,homeshop
import {banner,homeshop} from '../../../api/api.js'
//npm i swiper --save   引入swiper样式
import Swiper from 'swiper'
import "swiper/css/swiper.css"
//item 列表组件
import Item from '../../../components/item.vue'
//npm i better-scroll --save
import BScroll from 'better-scroll'
export default {
  components:{
        //头部
        Header,
        //列表
        Item
  },
  data(){
    return{
      //头部
      name:"校园超市",
      //banner图
      banner:[],
      //列表
      list:[],
      pageid:0,
      limit:10,
      //show
      show:false
    }
  },
  //轮播图
  async created(){
    let res=await banner();
    this.banner=res.data.data
    this.getlist()
    this.$nextTick(()=>{
      //轮播
      new Swiper(".swiper-container",{
        autoplay:true,
        loop:true,
        // effect:"cube",
        pagination: {
          el: '.swiper-pagination',
        }
      })
      //列表的滚动
      this.myBScroll=new BScroll(".scroll",{
        //开启上拉 下拉
        pullUpLoad:{
          threshold:-100
        },
        pullDownRefresh:{
          threshold:50
        }
      })
      //上
      this.myBScroll.on('pullingUp',()=>{
        this.pageid++
        //show
        if(!this.show){
          this.getlist()
        }
        
      })
      //下
      this.myBScroll.on('pullingDown',()=>{
         this.pageid=0
         this.list=[]
         //show
         this.show=false
         this.getlist()
      })
    })
  },
  methods:{
      async getlist(){
        //列表分装函数
        let shop=await homeshop({pageid:this.pageid,limit:this.limit})
        this.list=this.list.concat(shop.data.data)
        //show
        if(shop.data.data.length<=0){
          this.show=true
        }
        this.myBScroll.refresh()//刷新
        this.myBScroll.finishPullUp()//上
        this.myBScroll.finishPullDown()//下
      }
  }
}
</script>

<style>
  .home{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    width:100%;
  }
  .address{
    width:100%;
    height:30px;
  }
  .address input{
    width:100%;
    height:100%;
    background: #eee;
    outline: none;
    border:0;
  }
  .swiper-container{
    width:100%;
    height:200px;
  }
  .swiper-wrapper .swiper-slide img{
    width:100%;
    height:100%;
  }
  .scroll{
    flex: 1;
    width:100%;
    overflow: hidden;
  }
  .foot{
    width:100%;
    height:30px;
    text-align: center;
    line-height: 30px;
    font-size: 24px;
  }
</style>