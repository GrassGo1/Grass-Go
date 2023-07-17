import mongoose, { Schema } from 'mongoose';


const invoiceSchema = new Schema (
    {
        customerID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        businessID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        serviceIDs: {
            type: [mongoose.Schema.ObjectId],
            required: true
        },
        invoiceDate: {
            type: Date,
            required: true
        },
        dueDate: {
            type: Date,
            required: true
        },
        amount: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


const Invoice = mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema, "Invoices");
export default Invoice