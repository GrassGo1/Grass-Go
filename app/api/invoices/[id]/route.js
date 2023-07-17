import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Invoice from "@/model/Invoice";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    await Invoice.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "Invoice edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const invoice = await Invoice.findOne({_id: id});
    return NextResponse.json({ invoice }, { status: 200 });
}