import mongoose, { Schema } from 'mongoose';


const customerBusinessAssociationSchema = new Schema (
    {
        customerID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        businessID: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        associationStatus: {
            type: String,
            required: true
        },
        customerMessage: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);


const CustomerBusinessAssociation = mongoose.models.CustomerBusinessAssociation || mongoose.model("CustomerBusinessAssociation", customerBusinessAssociationSchema, "CustomerBusinessAssociations");
export default CustomerBusinessAssociation