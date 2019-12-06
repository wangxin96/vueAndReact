<template>
  <div>
    我的
    <solts v-slot:aa></solts>
  </div>
</template>

<script>
//插槽组件
import solts from '@/components/solts.vue'
export default {
  components:{
    //
    solts
  }
}
</script>

<style>

</style>