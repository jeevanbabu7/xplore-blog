import mongoose from "mongoose";

const techModel = mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    image: {
        type: String
    }
})
