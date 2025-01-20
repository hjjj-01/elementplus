<template>
    <div class="poweruser-list">
        
        <el-table :data="powerlistdata" border align="center" >
            <el-table-column label="ID" prop="pu_id" align="center" width="80" />
            <el-table-column label="权限名称" prop="power_name"align="center" width="150" />
            <el-table-column label="权限描述" prop="power_description"align="center" width="200" />
            <el-table-column label="操作" align="center"width="150">
                <template #default>
                    <el-button type="success" @click="opendialog()">
                        <el-icon><EditPen /></el-icon>
                    </el-button>
                    <!-- <el-button type="warning">
                        <el-icon><Tools /></el-icon>
                    </el-button>
                    <el-button type="danger">
                        <el-icon><Delete /></el-icon>
                    </el-button> -->
                </template>
            </el-table-column>
        </el-table>      
        <el-dialog title="编辑权限" v-model="dialogVisible" width="25%" >
            111
        </el-dialog>
         
    </div>
    
</template>
<script setup>

    import {ref,onMounted} from 'vue'

    const powerlistdata = ref([])
    const dialogVisible = ref(false)
    

    const getpowerlist =async () =>{
        const response = await fetch('http://localhost:3003/poweruser')
        const result = await response.json()
        console.log(result)
        powerlistdata.value = result.recordset
    }
    const opendialog = () => {
        dialogVisible.value = true
    }

    onMounted(()=>{
        getpowerlist()
    })

</script>
<style scoped>
    .el-table{
        width: 38.1%;
        background-color: #F3F6F7;
        font-size: 2vh;
        border: 1px solid #ccc;
        border-radius: 10px;
        color: rgb(54, 52, 52);
        
    }

    .poweruser-list{
        display: flex;
        justify-content: center !important;

    }
</style>