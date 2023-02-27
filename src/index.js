const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const v1WaptRouter = require("./v1/routes/waptRoutes")

const PORT = 3001;

app.use(bodyParser.json());
app.use("/api/v1", v1WaptRouter);
app.use(cors());

app.listen(PORT,()=>{
    console.log("wapt server is running");
})