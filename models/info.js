
import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const infoSchema = new Schema(
{
    name: {
    type: String,
    required: true
},
    description: {
        type: String,
        required: true
},
    title: {
        type: String,
        required: true
},
    Url: {
    type: String,
    require: true
},
    image: {
        type: String,
        
        
},
    languages: [{

    }],
    
    section: {
    type: String,
},
    
},

{
collection: 'info',
timestamps: true
}

);

const Info = model('Info', infoSchema);
export default Info;