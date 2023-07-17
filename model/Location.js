import mongoose, { Schema } from 'mongoose';


const locationSchema = new Schema (
    {
        businessID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        address: {
            type: new Schema({
                street: { type: String },
                city: { type: String },
                state: { type: String },
                zipCode: { type: String }
            }),
            required: true
        },
        radius: {
            type: String,
            required: true
        },
        pricePerSquareFoot: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


const Location = mongoose.models.Location || mongoose.model("Location", locationSchema, "Locations");
export default Location