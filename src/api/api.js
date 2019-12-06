//axios
import axios from 'axios'
//登录接口
export const login =(params)=>axios.post("/api/user/login",params)
//注册接口
export const registry =(params)=>axios.post("/api/user/registry",params)
//轮播接口
export const banner =()=>axios.get("/api/home/banner")
//首页列表接口
export const homeshop =(params)=>axios.get("/api/home/shop",{params})
//分类列表1
export const shopType = ()=> axios.get('/api/shop/shopType');
//分类筛选2
export const selectType =(params)=>axios.get('/api/shop/selectType',{params})