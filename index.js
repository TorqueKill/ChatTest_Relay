const express = require('express')
const Gun = require('gun');
const app = express()
const port = 3030
app.use(Gun.serve);

const server = app.listen(process.env || port, () => {
  console.log(`PORT : ${process.env || port}`)
})

Gun({ web: server });