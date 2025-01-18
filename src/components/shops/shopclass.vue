<template>
    <el-table :data="shopclassdata" :tree-props="{children: 'children'}">
        <!-- //二级分类 -->
            <el-table-column type="expand">
                <template #default="{row}">
                    <el-table :data="row.children">
                        <el-table-column label="分类名称" prop="name2"/>
                        <el-table-column label="分类等级" prop="level2"/>
                        <el-table-column label="操作">
                            <template #default>
                                <el-button>编辑</el-button>
                            </template>
                        </el-table-column>
                    </el-table>               
                </template>           
            </el-table-column>
        <!-- //一级分类 -->
        <el-table-column label="分类名称1" prop="name"/>
        <el-table-column label="分类等级1" prop="level"/>
        <el-table-column label="操作">
            <template #default>
                <el-button type="text">编辑</el-button>
            </template>
        </el-table-column>
        
    </el-table>
</template>
<script setup>

    import {ref,onMounted} from 'vue'

    const getshopclass=async()=>{
        const response = await fetch('http://localhost:3003/getshopclass')
        const result = await response.json()
        shopclassdata.value[0].name = result.class1.recordset.map(item => item.sc_name);
        shopclassdata.value[0].level = result.class1.recordset.map(item => item.sc_level);

        shopclassdata.value[0].children = result.class2.recordset.map(item => ({
                name2: item.sc_name,
                level2: item.sc_level
            }));

            console.log(shopclassdata.value);

    }

    onMounted(()=>{
        getshopclass()
    })

    const shopclassdata = ref([{
        name:'',
        level:'',
        children:[{
            name2:'',
            level2:''
            }
            ]
    }])



</script>
<style>
</style>


