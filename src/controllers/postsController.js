import fs from 'fs';
import path from 'path';
import { getAllPosts,  create, update} from '../models/postsModel.js';
import generateDescriptionWithGemini from '../services/geminiService.js';

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

export async function createPostGemini(req, res) {
    try {
        const newPost = {
            descricao: '',
            imagem: req.file.originalname,
        }

        const postCreated = await create(newPost);
        const imageUpdate = `uploads/${postCreated.insertedId}${path.extname(req.file.originalname)}`;
        fs.renameSync(req.file.path, imageUpdate);

        const imgBuffer = fs.readFileSync(imageUpdate);

        newPost.imagem = imageUpdate;
        newPost.descricao = await generateDescriptionWithGemini(imgBuffer);

        await update(postCreated.insertedId.toString(), newPost)
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
        const imageUpdate = `http://localhost:3000/${postCreated.insertedId}${path.extname(req.file.originalname)}`;
        fs.renameSync(req.file.path, `uploads/${postCreated.insertedId}${path.extname(req.file.originalname)}`);

        newPost.imagem = imageUpdate;
        console.log(postCreated.insertedId.toString());
        await update(postCreated.insertedId.toString(), newPost)
        res.status(200).json(postCreated);   

    } catch (error) {
        console.error(error.message);
        res.status(500).json({'Erro': 'Falha ao tentar criar o post.'});
    }
}