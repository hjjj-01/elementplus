<template>
    <div>
       
        <el-table :data="powerlistdata" border align="center">
            <el-table-column label="ID" prop="pu_id" align="center"/>
            <el-table-column label="权限名称" prop="power_name"align="center"/>
            <el-table-column label="权限描述" prop="power_description"align="center"/>
            <el-table-column label="操作" align="center">
                <template #default>
                    <el-button type="success">
                        <el-icon><EditPen /></el-icon>
                    </el-button>
                    <el-button type="warning">
                        <el-icon><Tools /></el-icon>
                    </el-button>
                    <el-button type="danger">
                        <el-icon><Delete /></el-icon>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>      
         
    </div>
    
</template>
<script setup>

    import {ref,onMounted} from 'vue'

    const powerlistdata = ref([])
    

    const getpowerlist =async () =>{
        const response = await fetch('http://localhost:3003/poweruser')
        const result = await response.json()
        console.log(result)
        powerlistdata.value = result.recordset
    }

    onMounted(()=>{
        getpowerlist()
    })

</script>
<style scoped>
</style>