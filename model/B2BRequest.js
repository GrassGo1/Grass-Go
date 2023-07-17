import mongoose, { Schema } from 'mongoose';


const b2bRequestSchema = new Schema (
    {
        eventBlockID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        requestingBusinessID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        respondingBusinessID: {
            type: mongoose.Schema.ObjectId,
            required: false
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


const Crew = mongoose.models.Crew || mongoose.model("Crew", b2bRequestSchema, "Crews");
export default Crew