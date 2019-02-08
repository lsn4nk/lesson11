console.log('start');

const http = require('http');
const port = 3000;
const url = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n')
});

server.listen(port, url, () => {
    console.log(`Start listening on port ${port}`)
});

console.log('finish');