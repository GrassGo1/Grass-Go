import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import CustomerBusinessAssociation from "@/model/CustomerBusinessAssociation";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    await CustomerBusinessAssociation.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "CustomerBusinessAssociation edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const customerBusinessAssociation = await CustomerBusinessAssociation.findOne({_id: id});
    return NextResponse.json({ customerBusinessAssociation }, { status: 200 });
}