import { Star } from "@/lib/models";
import connect from "@/lib/utils";
import { NextResponse } from "next/server";



export const GET = async (request) => {
    const url = new URL(request.url);
    const quoteId = url.searchParams.get("quoteId");
    try{
        await connect();
        const stars = await Star.find(quoteId && { quoteId });
        return new NextResponse(JSON.stringify(stars), { status: 200 });
    }catch (err) {
        return new NextResponse("Database Err", { status: 500 });
    } 
}

export const POST = async (request) => {
    const body = await request.json();
    const newPost = new Star(body);
    try{
        await connect();
        await newPost.save()
        return new NextResponse("Star has been posted", { status: 201 });
    }catch (err) {
        return new NextResponse("Database Err", { status: 500 });
    }
}