<template>
  <div class="registry">
    <!-- 头部 -->
    <div class="header">
      <Header :name="name"></Header>
    </div>
    <!-- 注册 -->
    <div>
        <input type="text" placeholder="请输入手机号" v-model="phone">
    </div>
    <div>
        <input type="text" placeholder="请输入密码" v-model="pwd"> 
    </div>
    <div>
        <button @click="Registry">完成</button>
    </div>
  </div>
</template>

<script>
//axios
// import axios from 'axios'
//头部组件
import Header from '../../components/header.vue'
//从api里引入registry
import {registry} from '../../api/api.js'
export default {
  components:{
      Header
  },
  data(){
    return {
      //数据的保存
     name:"校园超市",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
     phone:'',
     pwd:'',
     
    }
  },
  methods: {
    async Registry(){
      let phone=this.phone
      let pwd=this.pwd
      try {
        // let res=await axios.post("/api/user/registry",{phone:phone,password:pwd})
        let res=await registry({phone:phone,password:pwd})
        //成功的进入主页
        if(res.data.code===1){
          this.$router.go(-1)
        }
        //失败
      } catch (e) {
        console.log(e.response)
      }
    }
  }
}
</script>

<style>
  .registry{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .registry>div{
    width:100%;
    height:45px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 18px;
  }
  .registry>div input{
    width:100%;
    height:100%;
    outline: none;
    border:0;
  }
  .registry>div button{
    width:100%;
    height:100%;
    outline: none;
    border:0;
    background: #f00;
    color:#fff;
    font-size: 18px;
  }
</style>