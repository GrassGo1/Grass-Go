import mongoose, { Schema } from 'mongoose';


const crewSchema = new Schema (
    {
        crewName: {
            type: String,
            required: true
        },
        employeeIDs: {
            type: [mongoose.Schema.ObjectId],
            required: true
        },
        businessID: {
            type: mongoose.Schema.ObjectId,
            required: true
        }
    },
    {
        timestamps: true
    }
);


const Crew = mongoose.models.Crew || mongoose.model("Crew", crewSchema, "Crews");
export default Crew