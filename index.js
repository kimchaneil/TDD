const express = require('express');
const morgan = require('morgan');
const app = express();
var users = [
  {id:1, name: "alice"},
  {id:2, name: "bek"},
  {id:3, name: "chris"}
]
app.use(morgan('dev'));
app.get('/users',(req,res)=>{
  res.json(users);
})
app.listen(3000,()=>{
  console.log('server is running on 127.0.0.1:3000');
})

module.exports = app;