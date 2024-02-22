import connect from "@/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/modal/user.model";
const bcryptjs = require("bcryptjs")


connect()


console.log("hello")
export async function POST(req : NextRequest){
    const reqbody = await req.json()
    const {username,email,password} = reqbody
    
    const user = await User.findOne({email});

    if(user){
        return NextResponse.json({Error:"user already exist"},{status:400})
    }

    //hash password
    const salt = await bcryptjs.genSalt(10)
    const hashPassword = await bcryptjs.hash(password,salt)
    console.log(reqbody)
    // console.log(username,email,password)
    
    // const newUser = new User{
    //     username,
    //     email,
    //     hashPassword
    // })



    return NextResponse.json({key:"hello"})

}