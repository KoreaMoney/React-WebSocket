// socket.io 데이터 작성
module.exports = function (io) {
    // on (server에서 전달받은 값을 듣는 용도)
    io.on('connection', async (socket) => {
        console.log('client is connected', socket.id);
    });
};
