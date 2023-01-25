
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const infoSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        Url: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        languages: [String],

        section: {
            type: String,
            required: true
        },
    },

    { collection: "info", timestamps: true },
);

const Info = model("Info", infoSchema);
export default Info;