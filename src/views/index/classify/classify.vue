<template>
  <div class="classify">
    <!-- 左边 -->
    <div class="left">
      <ul>
        <!-- 数据的渲染  高亮 点击事件  -->
        <li v-for="(item,index) in leftlist" :key="index" :class="{'active':index==ind}" @click="goToRight(index)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <!-- 右边 -->
    <div class="right">
      <!-- 右边子导航   需要进行判断是否有children  数据的渲染  高亮 点击事件-->
      <ol v-if="leftlist[ind]&&leftlist[ind].children.length>0">
        <li v-for="(item,index) in leftlist[ind].children" :key="index" :class="{'cur':index==cur}" @click="changeRight(index)">
          {{item.name}}
        </li>
      </ol>
      <!-- 有的没有子导航的内容需要进行判断 -->
      <div v-if="rightlist&&rightlist.length==0">暂无数据</div>
      <!-- 右边子导航的内容 item组件-->
      <Item v-for="(item,index) in rightlist" :key="index" :item="item" v-else></Item>  
    </div>
  </div>
</template>

<script>
//item组件
import Item from '../../../components/item.vue'
//从api里引入shopType,selectType
import {shopType,selectType} from '../../../api/api.js'
export default {
     data(){
       return{
         leftlist:[],
         rightlist:[],
         ind:0,
         cur:0
       }
     },
     components:{
       //item组件
       Item
     },
     //左边的数据
     async mounted(){
       let res=await shopType()
       this.leftlist=res.data.data
       this.getlist()
     },
     methods:{
       //点击左导航
       goToRight(index){
         this.ind=index
         this.cur=0
         this.getlist()
       },
       //点击右边的子导航
       changeRight(cur){
        this.cur=cur;
        this.getlist()
       },
       async getlist(){
        //右边数据
        let type_id=this.leftlist[this.ind].id
        let category_id=this.leftlist[this.ind].children.length>0&&this.leftlist[this.ind].children[this.cur].id
        let shop = await selectType({type_id,category_id})
        this.rightlist=shop.data.data
       }
     }     
}
</script>

<style scoped lang="scss">
.classify{
  height: 100%;
  width: 100%;
  display: flex;
}
.left{
  width: 120px;
  height: 100%;
  border-right: 1px solid #ccc;
}
.left li{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}
.left li.active{
  color: red;
}
.right{
  flex: 1;
  height: 100%;
}
.right ol{
  display: flex;
}
.right ol li{
  flex:1;
  padding:  0 5px;
  box-sizing: border-box;
}
.right ol li.cur{
  color: red;
}
</style>