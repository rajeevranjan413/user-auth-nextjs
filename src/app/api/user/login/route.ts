import { NextResponse } from "next/server";

export async function GET(){
    try{
        const data = {key:"hello"}
        return NextResponse.json({data})
    }
    catch(erro){
        console.log(erro)
        return NextResponse.json({key:"Error in loging"})
        
    }
}