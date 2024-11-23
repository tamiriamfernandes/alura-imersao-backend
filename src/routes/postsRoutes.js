import express from 'express';
import multer from 'multer';
import { getAll, createPost, uploadImage } from '../controllers/postsController.js';

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

    app.get('/api/posts', getAll);
    app.post('/api/posts', createPost)
    app.post('/api/upload', upload.single('image'), uploadImage);
};

export default routes;
