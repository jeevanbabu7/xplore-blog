import express from 'express';
import mongoose from 'mongoose';
import Blog from './models/blog.model.js';
import { News } from './models/blog.model.js';
import dotenv from "dotenv";
import cors from "cors"


const app = express();

dotenv.config();

// Middleware to parse JSON
app.use(express.json());
app.use(cors({
    origin: ["https://xplore-blog-seven.vercel.app/", "http://localhost:5173"]
}));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

app.post('/api/blog/insert', async (req, res) => {
    try {
        const { title, content, image } = req.body;
        const newBlog = new Blog({ title, content, image, contentType: "image" });
        const response = await newBlog.save();
        res.status(201).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/news/insert', async (req, res) => {
    try{
        const {content} = req.body;
        const newNews = new News({
            content
        }) 
        const response = await newNews.save();
        res.json(response);
    }catch(err) {
        res.json(err)
    }
})

app.get('/api/blog/get', async (req, res) => {
    try {
        const response = await Blog.find();
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/news/get', async (req, res) => {
    try {
        const response = await News.find();
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/', (req, res) => {
    res.send("api running.....");
})

app.listen(3000, () => {
    console.log("App running on port 3000");
});
