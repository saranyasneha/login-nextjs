import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection=mongoose.connection;
        connection.on("Connected",()=>{
            console.log("Mongodb connected successfully");
            
        })
        connection.on("error",()=>{
            console.log("Mongodb connection error");
            process.exit();
            
        })
    } catch (error) {
        console.log(error);
        
    }
}