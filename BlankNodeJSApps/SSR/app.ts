import express = require('express');
import path = require('path');
//import handleRender from './handleRender';

const app = express();
const port = 8080;

app.use('/dist', express.static('dist'));
//app.get('/*', handleRender); // SSR

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.info(`Express is running on port ${port}.`);
});
