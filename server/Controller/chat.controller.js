// 메세지정보 저장
const Chat = require('../Models/chat');
const chatController = {};

chatController.saveChat = async (message, user) => {
    const newMessage = new Chat({
        chat: message,
        user: {
            id: user._id,
            name: user.name,
        },
        date: new Date(),
    });
    await newMessage.save();
    return newMessage;
};
module.exports = chatController;
