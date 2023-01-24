import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const adminSchema = new Schema(
{
    name: {
    type: String,
    // required: true
},
    email: {
        type: String,
        // required: true
},
    password: {
    type: String,
    // required: true
},
    title: {
        type: String,
        // required: true
},
    LinkedinUrl: {
    type: String,
    
},
    InstagramUrl: {
        type: String,
        
},
    GithubUrl: {
    type: String,
    
}

}, 

{
collection: 'admin',
timestamps: true,
created_at: { type: Date },
updated_at: { type: Date }
}

);

const Admin = model('Admin', adminSchema);
export default Admin;