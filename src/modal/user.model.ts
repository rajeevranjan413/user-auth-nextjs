import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,"Please enter you Name"],
        unique: true
    },
    email:{
        type: String,
        required: [true,"Please enter your email"],
        unique:true
    },
    password:{
        type: String,
        required: [true,"Please enter your password"]
    },
    token: String
})

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User