import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import User from "@/model/User";


export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "User edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const user = await User.findOne({_id: id});
    return NextResponse.json({ user }, { status: 200 });
}