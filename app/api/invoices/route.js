import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Invoice from "@/model/Invoice";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();
    await Invoice.create(reqjson);
    return NextResponse.json({ message: "Invoice created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const invoices = await Invoice.find();
    return NextResponse.json({ invoices });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Invoice.findByIdAndDelete(id);
    return NextResponse.json({ message: "Invoice deleted" }, { status: 200 });
}