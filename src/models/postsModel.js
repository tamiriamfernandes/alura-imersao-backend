import connectDb from './../config/dbConfig.js'
import dotenv from 'dotenv';
dotenv.config();

const connection = await connectDb(process.env.STRING_CONECTION);

export default async function getAllPosts(){
    const db = connection.db('imersao-instabytes');
    const listPosts = db.collection('posts');
    return listPosts.find().toArray();
};
