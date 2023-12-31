import express from 'express';

const port = 8000;
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.all('/hello', (req, res, next) => {
    res.send('All');
});

app.listen(port, () => {
    console.log (`Сервер запущен на http://localhost:${port}`);
});