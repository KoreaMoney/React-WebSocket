// 데이터 베이스 : 대화정보 스키마(데이터베이스의 구조와 제약조건에 관해 전반적인 명세를 기술)
/**
 * @param {chatText} mongoDB 데이터 베이스
 * */
const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema(
    {
        chat: String,
        user: {
            id: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
            },
            name: String,
        },
        date: String,
        room: {
            type: mongoose.Schema.ObjectId,
            ref: 'Room',
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('Chat', chatSchema);
