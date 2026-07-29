import { NextResponse } from "next/server";import { z } from "zod";
const schema=z.object({name:z.string().min(2).max(100),email:z.string().email(),organisation:z.string().max(150).optional(),message:z.string().min(20).max(5000)});
export async function POST(request:Request){try{const payload=schema.parse(await request.json());console.info("Validated contact message",{name:payload.name,email:payload.email});return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"Invalid request"},{status:400});}}
