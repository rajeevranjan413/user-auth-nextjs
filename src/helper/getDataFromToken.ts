import { NextRequest } from "next/server";
const jwt = require("jsonwebtoken")

export default function getTokenData(req : NextRequest){
    try{
        const token = req.cookies.get("token")?.value || ""
        const decodeToken :any = jwt.verfiy(token,"adf123adsf@34231@#")
        return decodeToken.id;
    }
    catch(err:any){
        throw new Error(err.message)
    }
}