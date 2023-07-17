import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import PayoutMethod from "@/model/PayoutMethod";
import { encryptData, decryptData } from "@/app/api/encryption";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();

    reqjson.accountNumber = encryptData(reqjson.accountNumber);
    reqjson.routingNumber = encryptData(reqjson.routingNumber);
    
    await PayoutMethod.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "PayoutMethod edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const payoutMethod = await PayoutMethod.findOne({_id: id});

    payoutMethod.accountNumber = decryptData(payoutMethod.accountNumber);
    payoutMethod.routingNumber = decryptData(payoutMethod.routingNumber);
    
    return NextResponse.json({ payoutMethod }, { status: 200 });
}