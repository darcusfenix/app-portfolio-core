// @flow
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    titleUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    published: {
        type: Date,
        default: Date.now,
        required: true
    },
    imgMedium: {
        type: String,
        required: true
    },
    totalShared: {
        type: Number,
        required: true
    },
});

export default schema;
