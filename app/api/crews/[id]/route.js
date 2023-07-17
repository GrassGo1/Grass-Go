import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Crew from "@/model/Crew";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    await Crew.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "Crew edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const crew = await Crew.findOne({_id: id});
    return NextResponse.json({ crew }, { status: 200 });
}