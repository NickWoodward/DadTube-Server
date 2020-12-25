const express = require('express');
const bodyParser = require('body-parser');

const videoRoutes = require('./routes/videoRoutes');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/video', videoRoutes);


app.listen(3001, () => {
    console.log('Running');
});