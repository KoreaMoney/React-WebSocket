const userController = require('../Controller/user.controller');
// socket.io 데이터 작성
module.exports = function (io) {
    // on (server에서 전달받은 값을 듣는 용도)
    io.on('connection', async (socket) => {
        socket.on('disconnect', () => {
            console.log('user is disconnected');
        });
        // 유저 닉네임 받기
        socket.on('login', async (userName, callback) => {
            try {
                // 유저정보 저장
                const user = await userController.saveUser(userName, socket.id);
                callback({
                    ok: true,
                    data: user,
                });
            } catch (err) {
                callback({
                    ok: false,
                    err: err.message,
                });
            }
        });
    });
};
