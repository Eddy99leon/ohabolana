import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { User } from "@/lib/models";
import connect from "@/lib/utils";


export const POST = async (request) => {
    const { name, email, password } = await request.json();
    await connect();
    const hashPassword = await bcrypt.hash(password, 5)
    const newUser = new User(
        {
            name,
            email,
            password: hashPassword,
        }
    )
    try{
        await newUser.save()
        return new NextResponse("Utilisateur est créer avec succée", {
            status: 201,
        })
    }catch(err){
        return new NextResponse(err.message, {
            status: 500,
        })
    }
}