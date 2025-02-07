import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    image: {
        type: String
    },
    contentType: {
        type: String
    }
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;

const newsSchema = new mongoose.Schema({
    content: String
}, { timestamps: true });

export const News = mongoose.model("News", newsSchema);
