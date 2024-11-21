
import { MongoClient } from "mongodb";
const connectionString="mongodb+srv://tuwshuk13:99534102tuv@cluster0.h79bf.mongodb.net/"
const connectionDB=async()=>{
    const client=new MongoClient(connectionString)
    let connection;
    try{
        connection = await client.connect()
    } catch (e){
     console.log("aldaa");
    } 
    const db = connection.db("sample_mflix")
    return db
}

export default connectionDB