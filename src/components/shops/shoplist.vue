<template>
    
    <el-table :data="shoplistdata" border>
        <el-table-column prop="goods_id" label="商品ID" width="120" align="center"></el-table-column>
        <el-table-column  prop="goods_name" label="商品名称" align="center"></el-table-column>
        <el-table-column prop="goods_price" label="商品价格" align="center"></el-table-column>
        <el-table-column prop="goods_intro" label="商品介绍" align="center"></el-table-column>
        <el-table-column prop="shop_name" label="店铺名称" align="center"></el-table-column>
        <el-table-column prop="shop_phone" label="店铺电话" align="center"></el-table-column>
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
</template>
<script setup>

    import { ref,onMounted } from 'vue'

    const shoplistdata = ref([])
    const getshoplist = async ()=>{
        const response = await fetch('http://localhost:3003/getshoplist');
        const result = await response.json()
        shoplistdata.value = result.recordset
        console.log(shoplistdata.value)
    }

    onMounted(()=>{
        getshoplist()
    })


</script>
<style scoped>
</style>