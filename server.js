const {Client} = require('pg')
const express = require('express')
const app = express()
app.use(express.json())

require('dotenv').config()

// console.log(process.env)

const port = process.env.PORT || 5050;

var conString =  process.env.CONN_STRING
const client = new Client(conString)

// app.get("/", (req,res) => res.sendFile(`${__dirname}/index.html`))
app.get("/attendance/:id", async(req,res) => {
    var id = parseInt(req.params.id)
    const rows = await readAttendance(id);
    res.setHeader("content-type","application/json")
    res.send(JSON.stringify(rows))
})

app.get("/attendance/:id/:month/:year" , async (req,res) => {
    var id = parseInt(req.params.id)
    var month = req.params.month 
    var year = parseInt(req.params.year)
    console.log(month,year)
    const result = await readAttendanceByDate(id,month,year)
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(result))
})

app.listen(port, () => console.log(`Web Server is Listening...on port ${port}`,))


start()
async function start() {
    await connect();
    /*
    const result = await readAttendance();
    console.log(result)
    */
//    await client.end()
}

async function connect(){
    try{
        await client.connect();
    }
    catch(e){
        console.error(`Failed to connect ${e}`)
    }
}

async function readAttendanceByDate(rollNO,month,year){
    try{
        const result = await client.query(`SELECT * FROM attendance WHERE date LIKE '${month}____${year}' AND roll = ${rollNO}`)

        return result.rows
    }

    catch(e){
        return []
    }
}

async function readAttendance(rollNO){
    try{
        const result = await client.query(`SELECT * FROM attendance WHERE roll = ${rollNO}`)
        // client.end()
        return result.rows
    }
    catch(e){
        return []
    }
}