import { Post } from "@/lib/models";
import connect from "@/lib/utils";
import { NextResponse } from "next/server"


export const GET = async (request) => {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");
    try{
        await connect();
        const posts = await Post.find(userId && { userId });
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    }catch (err) {
        return new NextResponse("Database Err", { status: 500 });
    } 
}

export const POST = async (request) => {
    const body = await request.json();
    const newPost = new Post(body);
    try{
        await connect();
        await newPost.save()
        return new NextResponse("Post has been created", { status: 201 });
    }catch (err) {
        return new NextResponse("Database Err", { status: 500 });
    }
}