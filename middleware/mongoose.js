import mongoose from "mongoose";

const connectDb = handler => async (req, res)=>{
    if(mongoose.connections[0].readystate){
        return handler(req,res)
    }
        await mongoose.connect("mongodb://0.0.0.0:27017/wishcartsite")
        return handler(req,res);
}
export default connectDb;