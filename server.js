const express = require("express")
const userUpload = require("./routes/index.js")
const app = express()
const cors = require("cors")

let options = {
    origin : "*",
}

app.use(cors(options));

app.use("/user", userUpload)

app.listen(process.env.PORT || 3001,()=>{
    console.log("server running on port 3001")
})
