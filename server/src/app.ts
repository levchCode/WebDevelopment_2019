import express = require('express');
import mg = require('mongodb');
import config from './config.json';

const app = express();
const port = 9000;

const MongoClient = mg.MongoClient;
const uri = config.url;

app.use(express.json());

app.get('/', (req: any, res: any) => {
    res.send('Animatr backend, nothing to see here, folks!');
});

// Профиль: должен вернуть имя пользователя, общее кол-во просмотров и лайков и список видео пользователя по user_id
app.post('/profile', (req: any, res: any) => {

    const user_id = req.body;

    MongoClient.connect(uri, (err: any, client: any) => {

        const collection = client.db('anim').collection('users');
        collection.find().toArray()
        .then((data: any) => {
            res.send({d: data});
            client.close();
        });
      });
});

// Просмотр видео: возращает информацию и само видео, по video_id
app.get('/watch', (req: any, res: any) => {

    const video_id = req.body;

    MongoClient.connect(uri, (err: any, client: any) => {

        const collection = client.db('anim').collection('videos');
        collection.find().toArray()
        .then((data: any) => {
            res.send({d: data});
            client.close();
        });
      });
});

// Загрузка видео: загружает информацию и само видео и возращает video_id
app.post('/upload', (req: any, res: any) => {

    const video = req.body;

    MongoClient.connect(uri, (err: any, client: any) => {

        const collection = client.db('anim').collection('users');
        collection.find().toArray()
        .then((data: any) => {
            res.send({d: data});
            client.close();
        });
      });
});

// Популярное: возращает 10 видео по убыванию просмотров
app.get('/popular', (req: any, res: any) => {


    MongoClient.connect(uri, (err: any, client: any) => {

        const collection = client.db('anim').collection('users');
        collection.find().toArray()
        .then((data: any) => {
            res.send({d: data});
            client.close();
        });
      });
});

// Засчитать просмотр или лайк
app.post('/viewlike', (req: any, res: any) => {

    const video_id = req.body;

    MongoClient.connect(uri, (err: any, client: any) => {

        const collection = client.db('anim').collection('users');
        collection.find().toArray()
        .then((data: any) => {
            res.send({d: data});
            client.close();
        });
      });
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});
