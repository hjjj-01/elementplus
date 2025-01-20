
<template>
    <div class="userlist">
        <el-table :data="userlistdata" border align="center">
            <el-table-column prop="user_id" label="ID" align="center" width="100"/>
            <el-table-column prop="user_name" label="用户名" align="center" width="150"/>
            <el-table-column prop="user_pwd" label="密码" align="center" width="250"/>
            <el-table-column prop="power" label="权限角色" align="center" width="150"/>
            <el-table-column  label="操作" align="center" width="265">
                <template #default="{$index}">  
                    <el-button type="success" @click="changepower($index)">
                        <el-icon><EditPen /></el-icon>
                    </el-button>
                    <el-button type="warning" @click="changemes($index)"> 
                        <el-icon><Tools/></el-icon>
                    </el-button>
                    <el-button type="danger" @click=deluser($index)>
                        <el-icon><Delete/></el-icon>
                    </el-button>
                </template>
            </el-table-column>

        </el-table>

        <!-- 权限 -->
        <el-dialog v-model="powervisible" title="修改用户权限" width=30vw   > 
            <div style="font-size: 2vh;color: #2e2c2c;line-height: 4vh;">当前角色:  {{ powerdialog.user_name }}</div>
            <div style="font-size: 2vh; color: #2e2c2c;line-height: 4vh">当前角色权限:  {{ powerdialog.user_power }}</div>
            <el-form  style="font-size: 50px;">
                <el-form-item label="更改权限:" :style="{marginTop: '1vh',color:'black'}">
                    <el-select v-model="powerdialog.change_power" style="width: 240px;">
                        <el-option label="administrator" value="administrator" class="option"/>
                        <el-option label="customer" value="editer" class="option"/>
                        <el-option label="test" value="viewer" class="option"/>
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
            <el-button type="primary" @click="surechange()" :style="{lineHeight: '3vh',fontSize: '1.8vh',width: '5vh',height: '3vh'}">确定</el-button>
            </template>
        </el-dialog>

        <!-- 信息 -->
        <el-dialog v-model="mesvisible" title="修改用户信息" width=30vw  align-center> 
            <div style="font-size: 2vh;color: #2e2c2c;line-height: 4vh;">当前用户名:  {{ mesdialog.user_name }}</div>
            <div style="font-size: 2vh; color: #2e2c2c;line-height: 4vh">当前用户密码:  {{ mesdialog.user_pwd }}</div>
            <el-from  style="font-size: 50px;">
                <el-form-item label="更改用户名:" :style="{marginTop: '1vh',color:'black'}">
                    <el-input v-model="mesdialog.change_name"></el-input>
                </el-form-item>
                <el-form-item label="更改密码:" :style="{marginTop: '1vh',marginLeft: '1vw',color:'black'}">
                    <el-input v-model="mesdialog.change_pwd"></el-input>
                </el-form-item>
            </el-from>
            <template #footer>
                <el-button type="primary" @click="suremes()" :style="{lineHeight: '3vh',fontSize: '1.8vh',width: '5vh',height: '3vh'}">确定</el-button>
            </template>
        </el-dialog>

        <!-- 删除-->
        <el-dialog v-model="delvisiable" title="删除用户" width=20vw  >
            <span>确定删除此用户吗？({{ deldialog.user_name }})</span>
            <template #footer>
                <el-button type="primary" @click="suredel()">确定</el-button>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
    import { ref,onMounted } from 'vue'
    import { ElMessage } from 'element-plus';

    const userlistdata = ref([]);
    const powervisible = ref(false);
    const mesvisible = ref(false);
    const delvisiable = ref(false);
    

    const getuserslist = async () => {

        const response = await fetch('http://localhost:3003/userslist');
        const result = await response.json();
        // 将整个数组替换为从服务器获取的数据
        userlistdata.value = result.recordset;
     };

    // 修改权限的弹窗信息数据
    const powerdialog = ref({
        user_id: '',
        user_power: '',
        user_name: '',
        change_power: '',
    });
    const mesdialog = ref({
        user_id: '',
        user_pwd: '',
        user_name: '',
        change_pwd: '',
        change_name: '',
    });
    const deldialog=ref({
        user_id: '',
        user_name: '',
    });
    
    // 修改权限按钮点击事件
    const changepower = (index) =>{
        powerdialog.value.id = userlistdata.value[index].user_id;
        powerdialog.value.user_name = userlistdata.value[index].user_name;
        powerdialog.value.user_power = userlistdata.value[index].change_power;
        powervisible.value = true;
    }
    const changemes= (index) =>{
        mesdialog.value.user_id = userlistdata.value[index].user_id;
        mesdialog.value.user_name = userlistdata.value[index].user_name;
        mesdialog.value.user_pwd = userlistdata.value[index].user_pwd;
        mesdialog.value.change_name = userlistdata.value[index].user_name;
        mesdialog.value.change_pwd = userlistdata.value[index].user_pwd;
        mesvisible.value = true;
    }
    const deluser = (index)=>{
        deldialog.value.user_id=userlistdata.value[index].user_id;
        deldialog.value.user_name=userlistdata.value[index].user_name;
        delvisiable.value=true;
    
    }
    // 确定修改权限
    const surechange = async () => {

            await fetch('http://localhost:3003/changepower', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                power: powerdialog.value.change_power,
                id: powerdialog.value.id
            })
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                ElMessage.success('修改成功');
            } else {
                ElMessage.error(result.message);
            }
        })
        .catch(error => {
            console.error('请求失败:', error);
            ElMessage.error('服务器错误');
        });


        powervisible.value = false;
        powerdialog.value.change_power = '';
        getuserslist();
    }
    // 确定修改信息
    const suremes = async () => {

            await fetch('http://localhost:3003/changemes',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: mesdialog.value.change_name,
                pwd: mesdialog.value.change_pwd,
                id: mesdialog.value.user_id
            })

            
        })
        .then(response => response.json())
        .then(result =>{
            if(result.success){
                ElMessage.success(result.message);
            }else{
                ElMessage.error(result.message)      
            }
        })
        .catch(error =>{
            ElMessage.error('服务器错误',error);
        })
        mesdialog.value.change_name = '';
        mesdialog.value.change_pwd = '';
        mesvisible.value = false;
        getuserslist();
    }
    const suredel = async () => {
        console.log(deldialog.value.user_id);
        await fetch('http://localhost:3003/deluser',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                id:deldialog.value.user_id
            })
        })
        .then(response => response.json())
        .then(result =>{
            if(result.success){
                ElMessage.success(result.message);
            }else{
                ElMessage.error(result.message)      
            }
        })
        .catch(error =>{
            console.error('服务器错误', error);
            ElMessage.error('服务器错误');
        })
        delvisiable.value = false;
        getuserslist();
    }


    onMounted(()=>{
        getuserslist();
    })

  
</script>
<style scoped>
    .el-table{
        width: 60%;
        background-color: #F3F6F7;
        font-size: 2vh;
        border: 1px solid #ccc;
        border-radius: 10px;
        color: rgb(54, 52, 52);
        
    }

    .el-select{
        background-color: aquamarine !important;

    }
    .userlist{
        display: flex;
        justify-content: center !important;

    }
   
</style>