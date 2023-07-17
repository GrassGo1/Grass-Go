import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import EventBlock from "@/model/EventBlock";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    await EventBlock.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "EventBlock edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const eventBlock = await EventBlock.findOne({_id: id});
    return NextResponse.json({ eventBlock }, { status: 200 });
}