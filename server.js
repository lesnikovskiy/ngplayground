const fs = require('fs');
const express = require('express');
const formidable = require('formidable');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => res.end('works!'))

app.post('/api/upload', cors(), (req, res) => {
    new formidable.IncomingForm()
        .parse(req)
        .on('fileBegin', (name, file) => {
            console.log(`name: ${name}, file: ${file}`)
            file.path = `${__dirname}/uploads/${file.name}`;
        })
        .on('file', (name, file) => {
            console.log('Uploaded ' + file.name);
            res.end('Done');
        });

    res.end('processing');
});

app.listen(3000);