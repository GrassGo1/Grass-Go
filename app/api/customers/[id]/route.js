import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Customer from "@/model/Customer";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    await Customer.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "Customer edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const customer = await Customer.findOne({_id: id});
    return NextResponse.json({ customer }, { status: 200 });
}