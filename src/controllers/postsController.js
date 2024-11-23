import fs from 'fs';
import path from 'path';
import { getAllPosts,  create} from "../models/postsModel.js";

export async function getAll(req, res) {
    const list = await getAllPosts();
    res.status(200).json(list);
}

export async function createPost(req, res) {
    const newPost = req.body;

    try {
        const postCreated = await create(newPost);
        res.status(200).json(postCreated);   

    } catch (error) {
        console.error(error.message);
        res.status(500).json({'Erro': 'Falha ao tentar criar o post.'});
    }
}

export async function uploadImage(req, res) {

    const newPost = {
        descricao: req.body.descricao,
        imagem: req.file.originalname,
    }

    try {
        const postCreated = await create(newPost);
        const imageUpdate = `uploads/${postCreated.insertedId}.${path.extname(req.file.originalname)}`;
        fs.renameSync(req.file.path, imageUpdate);

        res.status(200).json(postCreated);   

    } catch (error) {
        console.error(error.message);
        res.status(500).json({'Erro': 'Falha ao tentar criar o post.'});
    }
}