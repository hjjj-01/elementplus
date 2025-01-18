<template>

    <!-- 按钮 -->
    <el-button type="warning">警告按钮</el-button>
    <el-button type="primart" circle>
    <el-icon color="blue" ><Search/></el-icon>
    </el-button>
    <el-button-group>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    </el-button-group>
    
    <!-- 布局和菜单 -->
     <div>
        <el-container >
            <el-header class="header">
             <!-- 菜单 -->
                <el-menu mode="horizontal" >
                  <el-menu-item index="0">
                    <el-icon><Edit/></el-icon>
                  </el-menu-item>
                  <el-sub-menu index="1">
                    <template #title>111</template>
                      <el-menu-item index="1-1">111</el-menu-item>
                      <el-menu-item index="1-2">2</el-menu-item>
                      <el-menu-item index="1-3">3</el-menu-item> 
                  </el-sub-menu>
                  <el-sub-menu index="2">
                    <template #title>哈哈哈</template>
                      <el-menu-item index="2-1">13</el-menu-item>
                      <el-menu-item index="2-2">21</el-menu-item>
                      <el-menu-item index="2-3">33</el-menu-item> 
                  </el-sub-menu>
                </el-menu>
    
            </el-header>
          <el-container >
            <el-aside class="aside">
              <!-- 垂直菜单 -->
              <el-menu mode="vertical" background-color="#34485f">
                <el-menu-item index="1">1</el-menu-item>
                <el-menu-item index="2">2</el-menu-item>
                <el-menu-item index="3">3</el-menu-item>
              </el-menu>
            </el-aside>
            <el-main class="main">
              Main
            </el-main>
          </el-container>
        </el-container>
     </div>
        
    
    <!-- 图标 -->
    <el-icon><Edit/></el-icon>
    
    <!-- 消息提示框 -->
    <el-button @click="open1">成功提示</el-button>
    <el-button @click="open2">错误提示</el-button>
    <el-button @click="open3">警告提示</el-button>
    
    <!-- 消息弹出框 -->
    <el-button @click="open4">删除</el-button>
    
     <el-table :data="tableData">
       <el-table-column prop="id" label="ID"/>
       <el-table-column prop="username" label="用户名"/>
       <el-table-column prop="userpassword" label="密码"/>
       <el-table-column prop="userpower" label="权限"/>
     </el-table>

</template>
    
    

<script setup>
    import {ElMessage,ElMessageBox} from 'element-plus'
    const open1 = () =>{
      ElMessage({
        message: '成功!',
        type:'success',
        duration:1000 // 持续时间
      })
    }
    const open2 = () =>{
      ElMessage({
        message: '错误!',
        type:'error'
      })
    }
    const open3 = () =>{
      ElMessage({
        message: '警告!',
        type:'warning'
      })
    }
    const open4 = () =>{
      ElMessageBox.confirm(
        "确认删除吗?",
        "提示",
      {
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning',
      }
      )
      .then(()=>{
        ElMessage({
          message: '删除成功!',
          type:'info'
        })
      })
      .catch(()=>{
        ElMessage({
          message:'已取消',
          type:'info'
        })
      })
    }
    const tableData = [
      {
        id:1,
        username:'admin',
        userpassword:'123456',
        userpower:'admin'
      }
    ]
    
</script>
<style scoped>
    
    .aside {
      background-color: #34485f;  
    
    }
    .main {
      background-color: #E9EEF3; 
    }
    /* 设置除第一个 其他的右移动 */
    .el-menu--horizontal > .el-menu-item:nth-child(1) {
      margin-right: auto;
    }
    
    
    </style>
s    