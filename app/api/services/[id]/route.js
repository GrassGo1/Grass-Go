import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Service from "@/model/Service";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    await Service.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "Service edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const service = await Service.findOne({_id: id});
    return NextResponse.json({ service }, { status: 200 });
}