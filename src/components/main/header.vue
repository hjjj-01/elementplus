<template>
        <!--:ellipsis="false"不显示省略号 -->
        <el-menu                
            mode="horizontal"
            
             :ellipsis="false" 
            >
            <el-menu-item index="1" class="logo">
                <el-icon><Monitor/></el-icon>
                <SPAN @click="router.push('/')" >后台管理系统</SPAN>
            </el-menu-item>
            <el-menu-item index="2" >
                <span><el-icon><User/></el-icon><span>{{user}}</span></span>
            </el-menu-item>
            <el-sub-menu index="3" >
                <template #title>
                    <el-icon><Setting/></el-icon><p :style="{color: '#fff'}">设置</p>
                </template>
                <el-menu-item index="3-1" v-if="user!='未登录'">
                    <div >切换用户</div>
                </el-menu-item>
                <el-menu-item index="3-2">
                    <div v-if="user=='未登录'" @click="dialogVisible=true">登录用户</div>
                    <div v-if="user!='未登录'" @click="outlogin()">退出登录</div>
                </el-menu-item>            
            </el-sub-menu>
        </el-menu>
        <el-dialog v-model="dialogVisible" title="登录" width="20vw">
            <el-form>
                <el-form-item label="用户名:">
                    <el-tooltip content="请输入3-6位的账号" placement="top">
                        <el-input v-model="nextuser.name"></el-input>
                    </el-tooltip>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-tooltip content="请输入3-10位密码,不支持中文" placement="top">
                        <el-input type="password" v-model="nextuser.pwd"></el-input>
                    </el-tooltip>
                    
                </el-form-item>           
            </el-form>
            <template #footer>
                <el-button type="primary" @click=surelogin()>确定</el-button>
            </template>
        </el-dialog>
    
    
</template>
<script setup>
    import { computed, ref,onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import {ElMessage} from 'element-plus'
    import { useStore } from 'vuex'

    const router = useRouter()
    const store = useStore()
    const dialogVisible = ref(false)
    const user=computed(()=>store.state.vlogin_name)
    const login_power=computed(()=>store.state.vlogin_power)    
    const nextuser=ref({
        name:'',
        pwd:''
    })

    const surelogin =async ()=>{
        console.log(nextuser.value)
        if(nextuser.value.name.length<3 || nextuser.value.name.length>6||nextuser.value.pwd.length<3 || nextuser.value.pwd.length>10){
            ElMessage.error('用户名或密码长度不正确')
            return
        }else{
            const response = await fetch('http://localhost:3003/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:nextuser.value.name,
                    pwd:nextuser.value.pwd
                })
            })
            .then(response => response.json())
            .then(result=>{
                if(result.success){
                    ElMessage.success(result.message)
                    dialogVisible.value=false
                    console.log(result.data.power) 
                    localStorage.setItem('local_name',nextuser.value.name)
                    localStorage.setItem('local_power',result.data.power)
                    store.commit('setlogin',nextuser.value.name)
                    store.commit('setpower',result.data.power)
                }else{
                    ElMessage.error(result.message)
                }
            })
            .catch(error => {
                ElMessage.error(error)
            })
        }

    }
    const outlogin =()=>{
        nextuser.value.name=''
        nextuser.value.pwd=''
        localStorage.removeItem('local_name')
        localStorage.removeItem('local_power')
        store.commit('setlogin','未登录')
        store.commit('setpower','未登录')
    }

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
        vertical-align: -0.5vh !important;
    }
    
    .el-menu-item:hover{
        outline: 0 !important;
        background-color: #949799 !important;
        color: #fff !important;
    }
    
    .el-menu > .el-menu-item:nth-child(2){
        margin-right: auto;
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