import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Property from "@/model/Property";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    await Property.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "Property edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const property = await Property.findOne({_id: id});
    return NextResponse.json({ property }, { status: 200 });
}