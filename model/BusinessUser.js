import mongoose, { Schema } from 'mongoose';


const businessUserSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        userID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        creditCard: {
            type: new Schema({
                number: { type: String },
                expirationDate: { type: String },
                securityCode: { type: String }
            }),
            required: true
        },
        businessType: {
            type: String,
            required: true
        },
        companySize: {
            type: String,
            required: true
        },
        operationType: {
            type: String,
            required: true
        },
        referralSource: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: false
        },
        logoURL: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);


const BusinessUser = mongoose.models.BusinessUser || mongoose.model("BusinessUser", businessUserSchema, "BusinessUsers");
export default BusinessUser