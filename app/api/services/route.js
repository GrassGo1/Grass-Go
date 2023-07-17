import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Service from "@/model/Service";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();
    await Service.create(reqjson);
    return NextResponse.json({ message: "Service created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const services = await Service.find();
    return NextResponse.json({ services });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Service.findByIdAndDelete(id);
    return NextResponse.json({ message: "Service deleted" }, { status: 200 });
}