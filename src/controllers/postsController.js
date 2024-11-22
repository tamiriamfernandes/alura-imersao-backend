import getAllPosts from "../models/postsModel.js";

export async function getAll(req, res) {
    const list = await getAllPosts();
    res.status(200).json(list);
}