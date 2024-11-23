import connectDb from './../config/dbConfig.js'
import dotenv from 'dotenv';
dotenv.config();

const connection = await connectDb(process.env.STRING_CONECTION);

export async function getAllPosts(){
    const db = connection.db('imersao-instabytes');
    const collectionPost = db.collection('posts');
    return collectionPost.find().toArray();
};

export async function create(newPost){
    const db = connection.db('imersao-instabytes');
    const collectionPost = db.collection('posts');
    return collectionPost.insertOne(newPost);
};