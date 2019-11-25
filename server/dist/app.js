"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mg = require("mongodb");
const config_json_1 = __importDefault(require("./config.json"));
const app = express();
const port = 9000;
const MongoClient = mg.MongoClient;
const uri = config_json_1.default.url;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Animatr backend, nothing to see here, folks!');
});
// Профиль: должен вернуть имя пользователя, общее кол-во просмотров и лайков и список видео пользователя по user_id
app.post('/profile', (req, res) => {
    console.log(req.body);
    MongoClient.connect(uri, (err, client) => {
        const collection = client.db('anim').collection('users');
        collection.find().toArray()
            .then((data) => {
            res.send({ d: data });
            client.close();
        });
    });
});
// Просмотр видео: возращает информацию и само видео, по video_id
// Загрузка видео: загружает информацию и само видео и возращает video_id
// Популярное: возращает 10 видео по убыванию просмотров
// Засчитать просмотр или лайк
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map