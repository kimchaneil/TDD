const express = require('express');
const app = express();
function logger(req,res,next){
  console.log('i am logger')
  next(); // next 함수가 없다면 다음 logger2가 작동하지 않음
}
function logger2(req,res,next){
  console.log('i am logger 2')
  next();
}
app.use(logger);
app.use(logger2);
app.listen(3000,function(){
  console.log('Server is running');
})