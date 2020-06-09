
import express from 'express'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const app = express()
const adapter = new FileSync('../db/db.json')
const db = low(adapter)
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  db.defaults({projects: []})
    .write()
  console.log(`Example app listening at http://localhost:${port}`)
})