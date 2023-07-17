import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Location from "@/model/Location";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();
    await Location.create(reqjson);
    return NextResponse.json({ message: "Location created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const locations = await Location.find();
    return NextResponse.json({ locations });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Location.findByIdAndDelete(id);
    return NextResponse.json({ message: "Location deleted" }, { status: 200 });
}