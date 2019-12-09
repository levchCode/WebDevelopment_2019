"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const express = require("express");
const mg = require("mongodb");
const mongodb_1 = require("mongodb");
const config_json_1 = __importDefault(require("./config.json"));
const app = express();
const port = 3001;
const MongoClient = mg.MongoClient;
const uri = config_json_1.default.url;
app.use(express.json());
app.use(cors());
app.get('/api/', (req, res) => {
    res.send('Animatr backend, nothing to see here, folks!');
});
// Профиль: должен вернуть имя пользователя, общее кол-во просмотров и лайков и список видео пользователя по user_id
app.get('/api/profile', (req, res) => {
    const data = {};
    const u_id = req.body.user_id;
    MongoClient.connect(uri, (err, client) => {
        const video_collection = client.db('anim').collection('videos');
        const user_collection = client.db('anim').collection('users');
        video_collection.aggregate([
            { $match: { user_id: mongodb_1.ObjectId(u_id) } },
            { $group: { _id: '$user_id', total_views: { $sum: '$views' }, total_likes: { $sum: '$likes' } } },
        ]).toArray().then(async (viewlikes) => {
            const user = await user_collection.findOne({ _id: mongodb_1.ObjectId(u_id) });
            const vidlist = await video_collection.aggregate([
                { $project: { anim: 0 } },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'user_id',
                        foreignField: '_id',
                        as: 'user',
                    },
                }
            ]).toArray();
            data.username = user;
            data.total_views = viewlikes[0].total_views;
            data.total_likes = viewlikes[0].total_likes;
            data.videos = vidlist;
            res.send(data);
            client.close();
        });
    });
});
// {+} Просмотр видео: возращает информацию и само видео, по video_id
app.get('/api/watch', (req, res) => {
    const video_id = req.body.video_id;
    MongoClient.connect(uri, (err, client) => {
        const collection = client.db('anim').collection('videos');
        collection.find({ _id: mongodb_1.ObjectId(video_id) }).toArray()
            .then((data) => {
            res.send(data);
            client.close();
        });
    });
});
// {+} Загрузка видео: загружает информацию и само видео и возращает video_id
app.post('/api/upload', (req, res) => {
    const video_payload = req.body;
    video_payload.likes = 0;
    video_payload.views = 0;
    video_payload.user_id = mongodb_1.ObjectId(video_payload.user_id);
    console.log(video_payload);
    MongoClient.connect(uri, (err, client) => {
        const collection = client.db('anim').collection('videos');
        collection.insertOne(video_payload).then((result) => {
            res.send({ video_id: result.insertedId });
            client.close();
        });
    });
});
// {+} Популярное: возращает 10 видео по убыванию просмотров
app.get('/api/popular', (req, res) => {
    MongoClient.connect(uri, (err, client) => {
        const video_collection = client.db('anim').collection('videos');
        video_collection.aggregate([
            { $project: { anim: 0 } },
            { $sort: { views: -1 } },
            { $lookup: {
                    from: 'users',
                    localField: 'user_id',
                    foreignField: '_id',
                    as: 'user',
                },
            }
        ]).limit(10).toArray().then((data) => {
            res.send(data);
            client.close();
        });
    });
});
// {+} Засчитать просмотр или лайк (надо переделать, глупая система подсчета)
app.post('/api/viewlike', (req, res) => {
    const data = req.body;
    MongoClient.connect(uri, (err, client) => {
        const collection = client.db('anim').collection('videos');
        if (data.action === 'view') {
            collection.updateOne({
                _id: mongodb_1.ObjectId(data.video_id),
            }, {
                $inc: { views: 1 },
            }).then(() => {
                res.send({ result: 1 });
                client.close();
            });
        }
        else {
            collection.updateOne({
                _id: mongodb_1.ObjectId(data.video_id),
            }, {
                $inc: { likes: 1 },
            }).then(() => {
                res.send({ result: 1 });
                client.close();
            });
        }
    });
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map