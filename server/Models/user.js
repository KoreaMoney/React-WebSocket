// 데이터 베이스 : 유저정보 스키마(데이터베이스의 구조와 제약조건에 관해 전반적인 명세를 기술)
/**
 * @param {userInfo} mongoDB 데이터 베이스
 * */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User mush type name'],
        unique: true,
    },
    token: {
        type: String,
    },
    online: {
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.model('User', userSchema);
