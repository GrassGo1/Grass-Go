import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import User from "@/model/User";


export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();
    await User.create(reqjson);
    return NextResponse.json({ message: "User created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
}