// npm i socket.io-client 으로 client용 socket.io 설치 진행
import React, { useEffect, useState } from 'react';
import './app.css';
import socket from './server';
import InputField from './components/inputField/InputField';

const App = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        askUserName();
    }, []);

    // userName확인
    const askUserName = () => {
        const userName = prompt('닉네임을 작성하세요.');
        // user이름 보내기
        socket.emit('login', userName, (res) => {
            if (res?.ok) {
                setUserInfo(res);
            } else {
                console.log('데이터가 정상적으로 들어오지 않았습니다.');
            }
        });
    };
    return (
        <div className="App">
            <InputField />
        </div>
    );
};

export default App;
