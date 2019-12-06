<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding:0;
  margin:0;
  text-decoration: none;
  color:#000;
  list-style: none;
}
html,body{
  width:100%;
  height:100%;
}
#app {
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app>div{
  display: flex;
  flex-direction: column;
}
</style>
