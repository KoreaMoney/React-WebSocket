const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
    {
        room: String, // 채팅방 이름
        // 이 방안에 들어있는 맴버들 리스트
        members: [
            {
                type: mongoose.Schema.ObjectId,
                unique: true,
                ref: 'User',
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Room', roomSchema);
