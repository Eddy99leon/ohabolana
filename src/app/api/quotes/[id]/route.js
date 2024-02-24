import { Post } from "@/lib/models";
import connect from "@/lib/utils";
import { NextResponse } from "next/server"


export const GET = async (request, {params}) => {
    const category = params.id;
    console.log(category)
    try {
        await connect();
        const posts = await Post.find(category && { category });
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Err", { status: 500 });
    }
}

export const DELETE = async (request, {params}) => {
    const { id } = params;
    try{
        await connect();
        await Post.findByIdAndDelete(id);
        return new NextResponse("Post has been deleted", { status: 200 });
    }catch (err) {
        return new NextResponse("Database Err", { status: 500 });
    }
}