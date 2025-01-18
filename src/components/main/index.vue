<template>
    <el-container>
        <el-header >
           <Header/>
        </el-header>
        <el-container>
            <el-aside><Aside/></el-aside>
            <el-main><Main/> </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import Header from './header.vue'
import Aside from './aside.vue'
import Main from './main.vue';
</script>

<style scoped>

    .el-header{
        height: 6vh;
        width: 100vw;
        padding: 0 0 !important;

    }
    .el-aside{
        height: 94vh;
        width: 15vw;
        background-color: #282829;
    }
    .el-main{
        height: 94vh;
        background-color: #e4e8e9;}
    
    

</style>