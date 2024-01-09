const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3002

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send({message: "server is running"})
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})