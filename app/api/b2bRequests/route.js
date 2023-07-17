import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import B2BRequest from "@/model/B2BRequest";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();
    await B2BRequest.create(reqjson);
    return NextResponse.json({ message: "B2BRequest created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const b2bRequests = await B2BRequest.find();
    return NextResponse.json({ b2bRequests });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await B2BRequest.findByIdAndDelete(id);
    return NextResponse.json({ message: "B2BRequest deleted" }, { status: 200 });
}