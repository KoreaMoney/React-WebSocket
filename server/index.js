// 서버 개발 진행 - socket.io
/**
 * @param {createServer} server 생성
 */
const { createServer } = require('http');
const app = require('./app');
const { Server } = require('socket.io');
require('dotenv').config();

const httpServer = createServer(app);
// socket.io 연결
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3001',
    },
});
// io 매개변수에 전달
require('./utils/io')(io);

httpServer.listen(process.env.PORT, () => {
    console.log('Server Listening on port', process.env.PORT);
});
