import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Customers from "@/model/Customers";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();
    await Customers.create(reqjson);
    return NextResponse.json({ message: "Customers created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const customers = await Customers.find();
    return NextResponse.json({ customers });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Customers.findByIdAndDelete(id);
    return NextResponse.json({ message: "Customers deleted" }, { status: 200 });
}