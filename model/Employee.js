import mongoose, { Schema } from 'mongoose';


const employeeSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        hireDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: false
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


const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema, "Employees");
export default Employee