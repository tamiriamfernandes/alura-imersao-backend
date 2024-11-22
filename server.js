import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express();
routes(app);

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

// function getById(id){
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// };

// app.get('/api/posts/:id', (req, res) => {
//     const index = getById(req.params.id);
//     res.status(200).json(posts[index]);
// });