import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Employee from "@/model/Employee";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();
    await Employee.create(reqjson);
    return NextResponse.json({ message: "Employee created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const employees = await Employee.find();
    return NextResponse.json({ employees });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Employee.findByIdAndDelete(id);
    return NextResponse.json({ message: "Employee deleted" }, { status: 200 });
}