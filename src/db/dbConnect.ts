import mongoose from "mongoose";

export default async function connect() {
    try{
        mongoose.connect("mongodb+srv://rajuranjan413:1234@cluster0.tcjnf8e.mongodb.net/user")
        const connection = mongoose.connection

        connection.on("connected",()=>{
            console.log("DB connected successfully!")
        })
        connection.on("error",()=>{
            console.log("Make sure db server is running or not")
            process.exit()
        })
    }
    catch(err){
        console.log('Faild to DB connect',err)
    }
}