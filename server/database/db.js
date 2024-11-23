import mongoose  from "mongoose"
const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI+'learning')
        console.log("mongo db connected");
    }
    catch(error){
        console.log("mongo da rola pe gya ",error);
    }
} 

export default connectDb;