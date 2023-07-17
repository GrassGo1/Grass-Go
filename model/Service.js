import mongoose, { Schema } from 'mongoose';


const serviceSchema = new Schema (
    {
        propertyID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        customerID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        businessID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        assignedTo: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        assignedType: {
            type: String,
            required: true
        },
        serviceDate: {
            type: Date,
            required: true
        },
        servicePrice: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        associationStatus: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema, "Services");
export default Service