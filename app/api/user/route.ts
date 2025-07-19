import { NextRequest,NextResponse } from "next/server";

export async function POST(req: NextRequest){

    const body = await req.json();

    return Response.json({username: body.username, password:body.password})
 }






