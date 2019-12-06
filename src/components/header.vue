<template>
<!-- // 头部组件 -->
    <div class="header">
      <span></span>
      <span>{{name}}</span>
      <span></span>
    </div>
</template>
<script>
export default {
    props:["name"],   
}
</script>
<style scoped lang="scss">
.header{
    width:100%;
    height:45px;
    display: flex;
    align-items: center;
    justify-content:space-around;
    background: #eee;
    font-size: 22px;
}
</style>