import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import B2BRequest from "@/model/B2BRequest";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    await B2BRequest.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "B2BRequest edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const b2bRequest = await B2BRequest.findOne({_id: id});
    return NextResponse.json({ b2bRequest }, { status: 200 });
}