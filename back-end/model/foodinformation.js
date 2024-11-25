import { Schema, model } from mongoose;


const foodinformation=new Schema({
name :{
    type:String,
    required:true,
},
  year:string,
});
const food =model ("food",foodinformation)
export default food