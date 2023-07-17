import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Location from "@/model/Location";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    await Location.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "Location edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const location = await Location.findOne({_id: id});
    return NextResponse.json({ location }, { status: 200 });
}