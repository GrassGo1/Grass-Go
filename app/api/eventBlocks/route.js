import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import EventBlock from "@/model/EventBlock";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();
    await EventBlock.create(reqjson);
    return NextResponse.json({ message: "EventBlock created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const eventBlocks = await EventBlock.find();
    return NextResponse.json({ eventBlocks });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await EventBlock.findByIdAndDelete(id);
    return NextResponse.json({ message: "EventBlock deleted" }, { status: 200 });
}