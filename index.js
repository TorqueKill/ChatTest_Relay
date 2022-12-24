import express, { json } from 'express';
import Gun from 'gun';
//import cors from 'cors'
const app = express()
const port = 3030

app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log(`PORT : ${port}`)
})


Gun({ file:'/tmp/data', web: server});