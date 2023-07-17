import mongoose, { Schema } from 'mongoose';


const eventBlockSchema = new Schema (
    {
        businessID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        customerID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        propertyID: {
            type: mongoose.Schema.ObjectId,
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
        serviceIDs: {
            type: [mongoose.Schema.ObjectId,],
            required: true
        },
        crewID: {
            type: mongoose.Schema.ObjectId,
            required: false
        },
        employeeID: {
            type: mongoose.Schema.ObjectId,
            required: false
        },
        scheduleStatus: {
            type: String,
            required: true
        },
        assignedToCrewID: {
            type: mongoose.Schema.ObjectId,
            required: false
        },
        assignedToEmployeeID: {
            type: mongoose.Schema.ObjectId,
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


const EventBlock = mongoose.models.EventBlock || mongoose.model("EventBlock", eventBlockSchema, "EventBlocks");
export default EventBlock