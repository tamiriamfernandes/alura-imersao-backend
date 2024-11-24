import express from 'express';
import multer from 'multer';
import { getAll, createPost, uploadImage, createPostGemini } from '../controllers/postsController.js';
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
  }

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions))
    
    app.get('/api/posts', getAll);
    app.post('/api/posts', createPost)
    app.post('/api/posts/google-gemini', upload.single('image'), createPostGemini)
    app.post('/api/upload', upload.single('image'), uploadImage);
};

export default routes;
