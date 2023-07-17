import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Crew from "@/model/Crew";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();
    await Crew.create(reqjson);
    return NextResponse.json({ message: "Crew created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const crews = await Crew.find();
    return NextResponse.json({ crews });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Crew.findByIdAndDelete(id);
    return NextResponse.json({ message: "Crew deleted" }, { status: 200 });
}