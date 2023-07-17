import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Property from "@/model/Property";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();
    await Property.create(reqjson);
    return NextResponse.json({ message: "Property created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const properties = await Property.find();
    return NextResponse.json({ properties });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Property.findByIdAndDelete(id);
    return NextResponse.json({ message: "Property deleted" }, { status: 200 });
}