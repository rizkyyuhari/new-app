const express = require('express');
const app = express();
const port = process.env.PORT ||8080;
// const {createPool} = require('mysql')
// let conn = createPool({
//     user:process.env.DB_USER,
//     password:process.env.DB_PASS,
//     database:process.env.DB_NAME,
//     socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
// })
// console.log(process.env.INSTANCE_CONNECTION_NAME);




app.use('/' ,(req,res) =>{
    // const query = 'SELECT * FROM mahasiswa;'
    // conn.query(query , (err,result) =>{

    //     if(err) throw err
    //     console.log(result)
    //     res.status(200).send(result)
    // })
    res.send({message :'berhasil'})
    
})

app.listen(port , ()=>{
    console.log(`listen to the port : ${port}`)
})
