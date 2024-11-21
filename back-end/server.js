import express from "express";
import cors from "cors";
import connectionDB from "./connectDB.js";

const server = express();
server.use(cors());
const PORT = 8000;

server.get("/", (req, res) => {
  res.send(["hello world1", "hello"]);
});
 
server.get("/test", async(req,res)=>{

  const data= await connectionDB()
  let getdata=data.collection("users")
  let result = await getdata.find().limit(10).toArray()
  res.json({
    succss:true,
    data:result
  })

})

server.listen(PORT, (req,res) => {
  console.log(`server ajillaa http://localhost:${PORT}`);
});