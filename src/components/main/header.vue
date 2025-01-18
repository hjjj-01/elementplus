<template>
        <!--:ellipsis="false"不显示省略号 -->
        <el-menu                
            mode="horizontal"
            
             :ellipsis="false" 
            >
            <el-menu-item index="1" class="logo">
                <el-icon><Monitor/></el-icon>
                <SPAN @click="router.push('/')">后台管理系统</SPAN>
            </el-menu-item>
            <el-sub-menu index="2" >
                <template #title>
                    <el-icon><Setting/></el-icon><p :style="{color: '#fff'}">设置</p>
                </template>
                <el-menu-item index="2-1">切换用户</el-menu-item>
                <el-menu-item index="2-2">退出登录</el-menu-item>            
            </el-sub-menu>
        </el-menu>
    
    
</template>
<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
</script>
<style scoped>

    .el-menu{
        height: 6vh;
        width: 100vw;
        border: none !important;
        border-left-width: 0;
        background-color: #404143 !important;
    }  
    .logo:hover{
        background-color: rgb(184, 116, 27) !important;
    }
   
    .el-icon{
        font-size: 3vh !important;
        color: #fff;
        vertical-align: -1vh;
    }
    
    .el-menu-item:hover{
        outline: 0 !important;
        background-color: #949799 !important;
        color: #fff !important;
    }
    
    .el-menu > .el-menu-item:nth-child(1){
        margin-right: auto;
    }

    span{
        line-height: 6vh;
        font-size: 3vh;
        color: #fff;
        font-family: "楷体";
    }
</style>