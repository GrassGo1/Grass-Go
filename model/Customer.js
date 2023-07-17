import mongoose, { Schema } from 'mongoose';


const customerSchema = new Schema (
    {
        address: {
            type: new Schema({
                street: { type: String },
                city: { type: String },
                state: { type: String },
                zipCode: { type: String }
            }),
            required: true
        },
        userID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        businessID: {
            type: mongoose.Schema.ObjectId,
            required: false
        },
        propertyIDs: {
            type: [mongoose.Schema.ObjectId],
            required: true
        }
    },
    {
        timestamps: true
    }
);


const Customer = mongoose.models.Customer || mongoose.model("Customer", customerSchema, "Customers");
export default Customer