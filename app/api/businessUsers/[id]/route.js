import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import BusinessUser from "@/model/BusinessUser";
import { encryptData, decryptData } from "@/app/api/encryption";

export async function PUT(request, {params}) {
    const { id } = params;
    const reqjson = await request.json();
    await connectMongoDB();
    
    reqjson.creditCard.number = encryptData(reqjson.creditCard.number);
    reqjson.creditCard.expirationDate = encryptData(reqjson.creditCard.expirationDate);
    reqjson.creditCard.securityCode = encryptData(reqjson.creditCard.securityCode);

    await BusinessUser.findByIdAndUpdate(id, reqjson);
    return NextResponse.json({ message: "BusinessUser edited" }, { status: 200 });
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const businessUser = await BusinessUser.findOne({_id: id});
    
    businessUser.creditCard.number = decryptData(businessUser.creditCard.number);
    businessUser.creditCard.expirationDate = decryptData(businessUser.creditCard.expirationDate);
    businessUser.creditCard.securityCode = decryptData(businessUser.creditCard.securityCode);

    return NextResponse.json({ businessUser }, { status: 200 });
}