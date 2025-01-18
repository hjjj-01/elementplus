<template>
    <el-menu
        mode="vertical"
        id="aside-menu"
    >
        <el-sub-menu index="1">
            <template #title>
                <el-icon><User/></el-icon><span>用户管理</span>
            </template>
            <el-menu-item index="1-1" @click="gouserlist">
                <el-icon><User/></el-icon>
                用户列表
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon><Folder/></el-icon><span>权限管理</span>
            </template>
            <el-menu-item index="2-1" @click="router.push('/poweruser')"><el-icon><Folder/></el-icon>角色管理</el-menu-item>
            <el-menu-item index="2-2" @click="router.push('/powerlist')"><el-icon><Folder/></el-icon>权限列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <el-icon><Shop/></el-icon><span>商品管理</span>
            </template>
            <el-menu-item index="3-1" @click="router.push('/shoplist')"><el-icon><Shop/></el-icon>商品列表</el-menu-item>
            <el-menu-item index="3-2" @click="router.push('/shopclass')"><el-icon><Shop/></el-icon>商品分类</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
            <template #title>
                <el-icon><Goods/></el-icon><span>订单管理</span>
            </template>
            <el-menu-item index="4-1"><el-icon><Goods/></el-icon>订单列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
            <template #title>
                <el-icon><DataLine /></el-icon><span>数据详情</span>
            </template>
            <el-menu-item index="5-1"><el-icon><Menu/></el-icon>数据报表</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>

    import {useRouter} from 'vue-router'
    const router = useRouter()

    const gouserlist = () =>{
        router.push('/userlist')
    }

</script>

<style scoped>

    .el-sub-menu {
        background-color: #282829;
        width: 15vw;
    }
    .el-menu-item {
        color: #030303 !important;
        font-family: '宋体';
        font-size: 1VW;
    }
    .el-sub-menu .el-menu-item .el-icon{
        font-size: 2vh;
        color: #2e2c2c;
    }

    .el-icon{
        font-size: 2vh;
        color: #fff;
    }
    span{
        color: #fff;
        font-family: '宋体';
        font-size: 2vh;
    }





    
</style>