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
app.get('/', (req, res) => {
    res.send('Animatr backend, nothing to see here, folks!');
});
app.get('/test', (req, res) => {
    MongoClient.connect(uri, (err, client) => {
        const collection = client.db('anim').collection('users');
        collection.find().toArray()
            .then((data) => {
            console.log(data);
            res.send({ d: data });
            client.close();
        });
    });
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map