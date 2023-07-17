import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Employee from "@/model/Employee";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    await Employee.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "Employee edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const employee = await Employee.findOne({_id: id});
    return NextResponse.json({ employee }, { status: 200 });
}