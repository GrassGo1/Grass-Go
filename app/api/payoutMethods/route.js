import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import PayoutMethod from "@/model/PayoutMethod";
import { encryptData, decryptData } from "@/app/api/encryption";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();

    reqjson.accountNumber = encryptData(reqjson.accountNumber);
    reqjson.routingNumber = encryptData(reqjson.routingNumber);

    await PayoutMethod.create(reqjson);
    return NextResponse.json({ message: "PayoutMethod created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const payoutMethods = await PayoutMethod.find();
    
    const decryptedData = payoutMethods.map(data => {
        let decryptedAN = decryptData(data.accountNumber);
        let decryptedRN = decryptData(data.routingNumber);
        return { ...data.toJSON(), accountNumber: decryptedAN, routingNumber: decryptedRN };
    });

    return NextResponse.json({ payoutMethods: decryptedData });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await PayoutMethod.findByIdAndDelete(id);
    return NextResponse.json({ message: "PayoutMethod deleted" }, { status: 200 });
}