import express from 'express';

const posts = [
    {
        id: 1,
        descricao: 'Teste Descrição 1',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        id: 2,
        descricao: 'Teste Descrição 2',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        id: 3,
        descricao: 'Teste Descrição 3',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        id: 4,
        descricao: 'Teste Descrição 4',
        imagem: 'https://placecats.com/millie/300/150'
    },

];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

function getById(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

app.get('/api/posts/:id', (req, res) => {
    const index = getById(req.params.id);
    res.status(200).json(posts[index]);
});

app.get('/api/posts', (req, res) => {
    res.status(200).json(posts);
});