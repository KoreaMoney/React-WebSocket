const chatController = require('../Controller/chat.controller');
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
                // system 정보 저장
                const welcomeMessage = {
                    chat: `${user.name} is joined to this room`,
                    user: {
                        id: null,
                        name: 'system',
                    },
                };
                io.emit('message', welcomeMessage);
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
        // 메세지 받기
        socket.on('sendMessage', async (message, callback) => {
            try {
                // 메세지 작성한 유저 찾기 (socket.id기준)
                const user = await userController.checkUser(socket.id);
                // 메세지 저장
                const newMessage = await chatController.saveChat(message, user);
                // 메세지는 다른 형식으로 취해야 한다.
                // 새로운 메세지가 있다라는 것을 모두에게 알려줘야 한다.
                io.emit('message', newMessage);
                callback({
                    ok: true,
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
