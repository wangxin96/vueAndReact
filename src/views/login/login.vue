<template>
  <div class="login">
    <!-- 头部 -->
    <div class="header">
      <Header :name="name"></Header>
    </div>
    <div>
      <!-- :value="name" @input="changefunc" -->
      <input type="text" placeholder="请输入手机号" v-model="phone"/>
    </div>
    <div>
      <input type="text" placeholder="请输入密码" v-model="pwd"/>
    </div>
    <!-- 显示隐藏 -->
    <div v-if="show" @click="goToRegistry" class="once">立即注册</div>
    <div>
      <!-- 点击事件 -->
      <button @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
// axios
// import axios from 'axios'
//头部组件
import Header from '../../components/header.vue'
//从api里引入login
import {login} from '../../api/api.js'
export default {
  components:{
      Header
  },
    data(){
      return{
        name:"校园超市",
        phone:"",
        pwd:"",
        //先让它隐藏
        show:false
      }
    },
    methods:{
      //方法一:
      // submit(){
      //   console.log(this.phone,this.pwd)
      //   axios.post('/api/user/login',{phone:this.phone,password:this.pwd}).then(res=>{
      //     console.log(res)
      //     if(res.data.code===1){
      //       this.$router.push({path:"/index/home"})
      //       window.localStorage.token=res.data.data.token
      //     }else{
      //       // console.log("************")
      //     }
      //   }).catch((e)=>{
      //     console.log(e.response.data.msg)
      //   })
      //   }
      // },

      //方法二:
      async submit(){
       try {
          // let res=await axios.post("/api/user/login",{phone:this.phone,password:this.pwd})
          let res=await login ({phone:this.phone,password:this.pwd})
          if(res.data.code===1){
            window.localStorage.token=res.data.data.token
            this.$router.push({path:"/index/home"})
          }
          //登录失败时弹出提示并且出现“立即注册”字样
       } catch (e) {
        //  console.log(e.response.data.msg)
         alert(e.response.data.msg)
         this.show=true
       }
      },
      //当登录失败时跳转到注册页面
      goToRegistry(){
        this.$router.push("/registry")
      }
    }
}
</script>

<style>
  .login{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .login>div{
    width:100%;
    height:45px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 18px;
  }
  .login>div input{
    width:100%;
    height:100%;
    outline: none;
    border:0;
  }
  .login>div button{
    width:100%;
    height:100%;
    outline: none;
    border:0;
    background: #ccc;
    font-size: 18px;
  }
  .login .once{
    width:100%;
    height:45px;
    background: #f00;
    color:#fff;
    text-align: center;
    line-height: 45px;
  }
</style>