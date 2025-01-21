<template>
    <div class="box">
        <el-button type="primary" width="80%" class="new-power">新增权限</el-button>

    </div>
    <div class="box">
        <el-table :data="powerlistdata" border align="center">
            <el-table-column label="ID" prop="pl_id" align="center" width="100" />
            <el-table-column label="权限分类" prop="pl_class"align="center" width="150" />
            <el-table-column label="权限详情" prop="pl_detailed"align="center"width="200" />
            <el-table-column label="操作" align="center" width="300">
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
    <el-dialog>
        
    </el-dialog>
    
</template>
<script setup>

    import {ref,onMounted} from 'vue'

    const powerlistdata = ref([])
    

    const getpowerlist =async () =>{
        const response = await fetch('http://localhost:3003/powerlist')
        const result = await response.json()
        console.log(result)
        powerlistdata.value = result.recordset
    }

    onMounted(()=>{
        getpowerlist()
    })

</script>
<style scoped>
.new-power{
    width: 39.20vw;
}
.el-table{
    width: 39.2vw;
}
.box{
    display: flex;
    justify-content: center;
}
</style>