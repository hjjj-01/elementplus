import express from 'express';
import sql from 'mssql'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const config = {
    user:'sa',
    password:'hjl287589225',
    server:'PC-01',
    port:1433,
    database:'vue',
    options:{
        trustServerCertificate: true
    }
}
//User接口
//获取用户列表
app.get('/userslist',async (req,res)=>{
    await sql.connect(config);
    const result = await sql.query("select * from users");
    res.json(result)
})
//修改用户权限
app.post('/changepower', async (req, res) => {
    try {
        const { id, power } = req.body;
        if (!id || !power) {
            return res.status(400).json({ success: false, message: '缺少必要的参数' });
        }else{
            await sql.connect(config);
            const request = new sql.Request();
            request.input('id', sql.Int, id);
            request.input('power', sql.NVarChar, power);
            const result = await request.query('update users set power=@power where user_id=@id');
    
            if (result.rowsAffected[0] > 0) {
                res.json({ success: true, message: '权限更新成功' });
            } else {
                res.json({ success: false, message: '未找到指定用户或更新失败' });
            }
        }

       
    } catch (err) {
        console.error('权限更新失败:', err);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});
//修改用户信息
app.post('/changemes',async(req,res)=>{
    try{
        const {id,name,pwd} = req.body
        if(!id ||!name ||!pwd){
            return res.json({success:false,message:'缺少必要的参数'})
        }
        await sql.connect(config)
        const request = new sql.Request();
        request.input('id',sql.Int,id)
        request.input('name',sql.NVarChar,name)
        request.input('pwd',sql.NVarChar,pwd)
        const result = await request.query('update users set user_name=@name,user_pwd=@pwd where user_id=@id')
        if(result.rowsAffected[0]>0){
            res.json({success:true,message:'用户信息更新成功'})
        }else{
            res.json({success:false,message:'未找到指定用户或更新失败'})
        }
    }catch(err){
        console.error('用户信息更新失败:',err)
        res.status(500).json({success:false,message:'服务器错误'})
    }

    
})


//Power接口
//获取角色列表
app.get('/poweruser',async(req,res)=>{
    await sql.connect(config);
    const result = await sql.query('select * from poweruser')
    res.json(result)
})
//获取权限列表
app.get('/powerlist',async(req,res)=>{
    await sql.connect(config);
    const result = await sql.query('select * from powerlist')
    res.json(result)
})

//获取商品分类列表
app.get('/getshopclass',async(req,res)=>{
    await sql.connect(config);
    const class1 = await sql.query('select * from shopclass1')
    const class2 = await sql.query('select * from shopclass2')
    res.json({class1,class2})
})

//获取商品列表
app.get('/getshoplist',async(req,res)=>{
    await sql.connect(config);
    const result = await sql.query('select * from shoplist')
    res.json(result)
})

const port = process.env.PORT || 3003;
app.listen(port,()=>{
    console.log(`服务器已启动，端口号：${port}`)
})
