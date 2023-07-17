import mongoose, { Schema } from 'mongoose';


const propertySchema = new Schema (
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
        coordinates: {
            type: String,
            required: true
        },
        yardSize: {
            type: String,
            required: false
        },
        customerID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        associationStatus: {
            type: String,
            required: true
        },
        mowingLevelOfDetail: {
            type: String,
            required: true
        },
        fenceWidth: {
            type: Number,
            required: false
        },
        isPushMowerRequired: {
            type: Boolean,
            required: true
        },
        gateCodes: {
            type: String,
            required: false
        },
        specialNeeds: {
            type: String,
            required: false
        },
        averageServiceTime: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


const Property = mongoose.models.Property || mongoose.model("Property", propertySchema, "Properties");
export default Property