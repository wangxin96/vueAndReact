<template>
<!-- //列表组件 -->
    <dl>
        <dt>
            <!-- v-lazy可以让图片懒加载 -->
            <img v-lazy="item.cover" alt="">
        </dt>
        <dd>
            <h3>{{item.name}}</h3>
            <p>累计{{item.volume}}份</p>
            <div>
                <span>价格:{{item.price}}</span>
                <span>(购物车图标)</span>
            </div>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        item:{
            type:Object
        }
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    dl{
        display: flex;
        padding:5px 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
    }
    dl>dt{
        width:120px;
        height:120px;
    }
    dl>dt>img{
        height:100%;
        width:100%;
    }
    dl>dd{
        flex: 1;
        height:120px;
    }
</style>