import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import BusinessUser from "@/model/BusinessUser";
import { encryptData, decryptData } from "@/app/api/encryption";

export async function POST(request) {
    const reqjson = await request.json();
    await connectMongoDB();

    reqjson.creditCard.number = encryptData(reqjson.creditCard.number);
    reqjson.creditCard.expirationDate = encryptData(reqjson.creditCard.expirationDate);
    reqjson.creditCard.securityCode = encryptData(reqjson.creditCard.securityCode);

    await BusinessUser.create(reqjson);
    return NextResponse.json({ message: "BusinessUser created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const businessUsers = await BusinessUser.find();

    const decryptedData = businessUsers.map(data => {
        let decryptedNum = decryptData(data.creditCard.number);
        let decryptedExp = decryptData(data.creditCard.expirationDate);
        let decryptedSec = decryptData(data.creditCard.securityCode);
        let decryptedCC = {
            number: decryptedNum,
            expirationDate: decryptedExp,
            securityCode: decryptedSec
        }
        return { ...data.toJSON(), creditCard: decryptedCC };
    });

    return NextResponse.json({ businessUsers: decryptedData });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await BusinessUser.findByIdAndDelete(id);
    return NextResponse.json({ message: "BusinessUser deleted" }, { status: 200 });
}