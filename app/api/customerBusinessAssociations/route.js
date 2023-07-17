import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import CustomerBusinessAssociation from "@/model/CustomerBusinessAssociation";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();
    await CustomerBusinessAssociation.create(reqjson);
    return NextResponse.json({ message: "CustomerBusinessAssociation created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const customerBusinessAssociations = await CustomerBusinessAssociation.find();
    return NextResponse.json({ customerBusinessAssociations });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await CustomerBusinessAssociation.findByIdAndDelete(id);
    return NextResponse.json({ message: "CustomerBusinessAssociation deleted" }, { status: 200 });
}