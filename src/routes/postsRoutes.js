import express from 'express';
import { getAll } from '../controllers/postsController.js';

const routes = (app) => {
    app.use(express.json());

    app.get('/api/posts', getAll);
};

export default routes;
