const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('hello world');
})

app.listen(3000,()=>{
  console.log('server is running on 127.0.0.1:3000');
})