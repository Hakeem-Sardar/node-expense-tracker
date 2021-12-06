const bodyparser= require("body-parser");
const express = require("express");
const db = require("./src/config/dbConfig");
const routes = require("./src/route");
const cors = require("cors")

require("dotenv").config();





const port = process.env.PORT || 5000;
const app = express();
app.use(cors())

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use("/v1",routes)





app.listen(port, ()=>{
    console.log(`app listening on port http://192.168.6.67:${port}`)
})
