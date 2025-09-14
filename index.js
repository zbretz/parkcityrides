const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const routes = require('./routes')

// middleware to send responses as json
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', `*`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

app.use('/', routes);

server.listen(8000, () => {
    console.log('listening on *:8000');
});


module.exports = {
    server: server,
    app: app,
}


