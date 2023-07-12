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
  req.query.limit = req.query.limit || 10 ;
  //const limit = req.query.limit; // "2"
  const limit = parseInt(req.query.limit,10); // 2
  if(Number.isNaN(limit)){
    return res.status(400).end()
  }
  res.json(users.slice(0,limit));
})
app.listen(3000,()=>{
  console.log('server is running on 127.0.0.1:3000');
})

module.exports = app;