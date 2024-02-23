import connect from "@/db/dbConnect";
import User from "@/modal/user.model";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

connect()
export async function POST(req: NextRequest){
    try{
        //recevied credential from user
        const reqBody = await req.json()
        const {email,password} = reqBody
        
        //find user 
        const user = await User.findOne({email})


        //check user exsit in database or not
        if(!user){
            return NextResponse.json({erro:"User does not exit"},{status:400})
        }

        //check password is vaild or not
        const vaildPassword = await bcrypt.compare(password,user.password)

        if (!vaildPassword) {
            return NextResponse.json({error:"Invalid Password"},{status:400})
        }

        //create token data
        const tokenData = {
            id:user._id,
            username:user.username,
            email:user.email
        }

        const token = await jwt.sign(tokenData,"adf123adsf@34231@#",{expiresIn:"1d"})

        const response = NextResponse.json({
            message:"Login Successfully",
            success: true
        })

        response.cookies.set("token",token,{httpOnly:true})

    
        return response;

    }
    catch(error:any){
       
        return NextResponse.json({error :error.message},{status:500})
        
    }
}