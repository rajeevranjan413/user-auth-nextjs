import getTokenData from "@/helper/getDataFromToken";
import User from "@/modal/user.model";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(req:NextRequest){
    try{

        const userId = await getTokenData(req)
    
        const user = await User.findOne({_id:userId}).select("-password")
        console.log(user)
        return NextResponse.json({
            message:"User found",
            user: user
        })
    }
    catch(err:any){
        return NextResponse.json({error:err.message},{status:400})
    }
}