import express from 'express'
import logger from "morgan"
import cookieParser from 'cookie-parser'


const app = express()

app.use(logger("dev"))
 app.use(express.json())
app.use(cookieParser())

app.set("view engine", "ejs")

app.get('/', (req,res)=>{
    res.send("Hello world")
})

const port = 5000
app.listen(port,()=>{
    console.log('server connected at',port)
})
