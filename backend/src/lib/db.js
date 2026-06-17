import mongoose from "mongoose";
import { ENV } from "./env.js";
import dns from "dns";
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
]);

export const connectDB=async ()=>{
    console.log(
        "Database url:", ENV.MONGO_URI
    )
    try {
        const {MONGO_URI}=ENV;
        if(!MONGO_URI){
            throw new Error("MONGO_URI is not defined");
        }
      const conn=  await mongoose.connect(ENV.MONGO_URI);
        console.log('MongoDB connected',conn.connection.host);
    } catch (error) {
        console.log("Error connecting MongoDB:",error);
        process.exit(1);
    }
}