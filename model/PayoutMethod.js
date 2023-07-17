import mongoose, { Schema } from 'mongoose';


const payoutMethodSchema = new Schema (
    {
        businessID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        bankName: {
            type: String,
            required: true
        },
        accountHolderName: {
            type: String,
            required: true
        },
        accountNumber: {
            type: String,
            required: true
        },
        routingNumber: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


const PayoutMethod = mongoose.models.PayoutMethod || mongoose.model("PayoutMethod", payoutMethodSchema, "PayoutMethods");
export default PayoutMethod