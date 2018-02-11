// @flow
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    type: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

export default schema;
