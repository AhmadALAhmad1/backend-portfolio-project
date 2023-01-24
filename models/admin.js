
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const adminSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },

        linkedinUrl: String,
        instagramUrl: String,
        githubUrl: String,
        createdAt: Date,
        updatedAt: Date
    },

    {
        collection: 'admins',
        timestamps: true,
    }

);

const Admin = model('Admin', adminSchema);
export default Admin;