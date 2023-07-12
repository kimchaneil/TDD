const app = require ('../index');
const syncDb = require ('./sync-db')

syncDb().then(_=>{
  console.log('sync database')
  app.listen(3000,()=>{
      console.log('server is running on 127.0.0.1:3000');
    })
})