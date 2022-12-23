import express, { json } from 'express';
import Gun from 'gun';
import cors from 'cors'
const app = express()
const port = 3030

app.use(cors())
app.use(json())

app.use("/",(req,res,next)=>{
  res.json({message:"server OK"})
  next()
})

app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log(`PORT : ${port}`)
})


Gun({ web: server });