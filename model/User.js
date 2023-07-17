import mongoose, { Schema } from 'mongoose';
import bcrypt from "bcrypt";

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }
        // What does "role" mean?
    },
    {
        timestamps: true
    }
);


userSchema.pre('save', async function (next) {
    // if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(Number(process.env.SALT_WF));
        this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
        next(err);
    }
    next();
});


userSchema.pre('findOneAndUpdate', async function (next) {
    const originalDoc = this._conditions;
    const updatedDoc = this.getUpdate();
    try {
        const salt = await bcrypt.genSalt(Number(process.env.SALT_WF));
        const newPassHash = await bcrypt.hash(updatedDoc.password, salt);
        if (newPassHash != originalDoc.password) this._update.password = newPassHash;
    } catch (err) {
        next(err);
    }
    next();
});



const User = mongoose.models.User || mongoose.model("User", userSchema, "Users");
export default User