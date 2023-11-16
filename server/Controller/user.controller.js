// 유저정보 저장
const User = require('../Models/user');
const userController = {};
// 저장 정보 : 이름, token
userController.saveUser = async (userName, sid) => {
    // 이미 입장한 사용자인지 확인
    let user = await User.findOne({ name: userName });
    // 새로 입장한 사용자 등록
    if (!user) {
        user = new User({
            name: userName,
            token: sid,
            online: true,
        });
    }
    // 이미 입장한 사용자는 연결정보만 변경
    user.token = sid;
    user.online = true;

    await user.save();
    return user;
};
module.exports = userController;
