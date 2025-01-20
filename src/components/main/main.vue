<template>
    <!-- <el-button type="primary" @click="a">查看路由</el-button> -->
    <div class="user-list" v-if="route.name === 'home'" id="home">
        {{text}}
    </div>
    <div class="user-list"  v-if="route.name === 'userlist'">
        <div>
            <h1>用户表</h1>
            <Userlist/> 
        </div>
                
    </div>
    <div class="user-list"  v-if="route.name === 'poweruser'">
        <div>
            <h1>角色管理</h1>
            <Poweruser/> 
        </div>
                
    </div>
    <div class="user-list"  v-if="route.name === 'powerlist'">
        <div>
            <h1>权限列表</h1>
            <Powerlist/> 
        </div>
                
    </div>
    <div class="user-list"  v-if="route.name === 'shopclass'">
        <div>
            <h1>商品分类</h1>
            <Shopclass/> 
        </div>
                
    </div>
    <div class="user-list"  v-if="route.name === 'shoplist'">
        <div>
            <h1>商品列表</h1>
            <Shoplist/> 
        </div>
                
    </div>
</template>
<script setup>
    import Userlist from '../user/userlist.vue';
    import Poweruser from '../power/poweruser.vue'
    import Powerlist from '../power/powerlist.vue'
    import Shopclass from '../shops/shopclass.vue'
    import Shoplist from '../shops/shoplist.vue'

    import { useRoute } from 'vue-router';
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore()
    const route =useRoute();

    const user_power=computed(()=>store.state.vlogin_power)
    const text = computed(()=>{
        return user_power.value==='未登录'? '您还未登录':'您已进入后台管理系统'
    })

</script>
<style scoped>
    .user-list {
        width: 80vw;
        height: 85vh;
        background-color: rgb(243, 246, 247);
        margin: auto;
        padding: 20px;
    }
    h1{
        text-align: center;
        font-family: '楷体';
        font-size: 3vh;
    }
    #home{
        text-align: center;
        font-family: '楷体';
        font-size: 7vh;
        line-height: 88vh;
    }
</style>