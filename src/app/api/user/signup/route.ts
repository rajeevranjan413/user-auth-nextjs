import connect from "@/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/modal/user.model";
const bcrypt = require("bcrypt")



connect()

export async function POST(req : NextRequest){
    try{
        const reqbody = await req.json()
        const {username,email,password} = reqbody
        
        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({Error:"user already exist"},{status:400})
        }

    

        // //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
    
        // console.log(hashedPassword)
        // console.log(username,email,password)
        
        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })

        const savedUser = await newUser.save();

        return NextResponse.json({
            message: "User created Sucessfully",
            success: true,
            savedUser
        })
    }
    catch(error:any){
        NextResponse.json({error:error.message},{status:500})
    }



    

}