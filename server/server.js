import express from 'express';
import mongoose, { mongo } from 'mongoose';
const app = express();

mongoose.connect("mongodb+srv://jeevan:jeevanbabu123@cluster0.rkpqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((res) => {
    console.log("mongo db connected");
    
})
app.route('/api/get/blog', (req, res) => {
    
});

app.listen(3000, () => {
    console.log("app running on port 3000")
});