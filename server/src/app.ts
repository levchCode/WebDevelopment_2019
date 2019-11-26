import express = require('express');
import mg = require('mongodb');
import { ObjectId } from 'mongodb';
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
app.get('/profile', (req: any, res: any) => {

    const u_id = req.body.user_id;

    MongoClient.connect(uri, (err: any, client: any) => {

        const collection = client.db('anim').collection('videos');
        collection.aggregate([
                { $match: { user_id: ObjectId(u_id) }},
                { $group: { _id: '$user_id', total_views: { $sum: '$views' }, total_likes: { $sum: '$likes' }}},
        ]).toArray().then((data: any) => {
            res.send(data);
            client.close();
        });
    });
});

// {+} Просмотр видео: возращает информацию и само видео, по video_id
app.get('/watch', (req: any, res: any) => {

    const video_id = req.body.video_id;

    MongoClient.connect(uri, (err: any, client: any) => {

        const collection = client.db('anim').collection('videos');
        collection.find({_id: ObjectId(video_id)}).toArray()
        .then((data: any) => {
            res.send(data);
            client.close();
        });
      });
});

// {+} Загрузка видео: загружает информацию и само видео и возращает video_id
app.post('/upload', (req: any, res: any) => {

    const video_payload = req.body;

    MongoClient.connect(uri, (err: any, client: any) => {
        const collection = client.db('anim').collection('videos');
        collection.insertOne(video_payload).then((result: any) => {
            res.send({video_id: result.insertedId});
            client.close();
        });

    });
});

// {+} Популярное: возращает 10 видео по убыванию просмотров
app.get('/popular', (req: any, res: any) => {

    MongoClient.connect(uri, (err: any, client: any) => {

        const collection = client.db('anim').collection('videos');
        collection.find().sort({views: -1}).limit(10).toArray()
        .then((data: any) => {
            res.send(data);
            client.close();
        });
      });
});

// {+} Засчитать просмотр или лайк
app.post('/viewlike', (req: any, res: any) => {

    const data = req.body;

    MongoClient.connect(uri, (err: any, client: any) => {

        const collection = client.db('anim').collection('videos');
        if (data.action === 'view') {

            collection.updateOne(
                {
                    _id: ObjectId(data.video_id),
                },
                {
                    $inc: { views: 1 },
                },
            ).then(() => {
                res.send({result: 1});
                client.close();
            });
        } else {
            collection.updateOne(
                {
                    _id: ObjectId(data.video_id),
                },
                {
                    $inc: { likes: 1 },
                },
            ).then(() => {
                res.send({result: 1});
                client.close();
            });
        }

    });

});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});
