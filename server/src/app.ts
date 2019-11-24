import express = require('express');
import mg = require('mongodb');
import config from './config.json';

const app = express();
const port = 9000;

const MongoClient = mg.MongoClient;
const uri = config.url;

app.get('/', (req: any, res: any) => {
    res.send('Animatr backend, nothing to see here, folks!');
});

app.get('/profile', (req: any, res: any) => {

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
