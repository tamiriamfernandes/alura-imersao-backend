import { ObjectId } from 'mongodb';
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

export async function update(id, post){
    const db = connection.db('imersao-instabytes');
    const collectionPost = db.collection('posts');
    const objId = ObjectId.createFromHexString(id);
    return collectionPost.updateOne({_id: new ObjectId(objId)}, {$set: post});
};