import express from 'express'
const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => res.send(`Welcome from the server ╰(*°▽°*)╯`))

app.listen(PORT, ()=> console.log(`server is listening on port ${PORT}`))