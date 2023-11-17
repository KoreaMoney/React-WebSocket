import React from 'react';
import './messageContainer.css';
import { Container } from '@mui/system';
import dayjs from 'dayjs';

const MessageContainer = ({ messageList, user }) => {
    const getFormattedDate = (messageDate) => {
        const currentDate = dayjs();
        const messageDateObject = dayjs(messageDate);

        if (messageDateObject.isSame(currentDate, 'day')) {
            return messageDateObject.format('오늘 HH:mm');
        } else if (messageDateObject.isSame(currentDate.subtract(1, 'day'), 'day')) {
            return messageDateObject.format('어제 HH:mm');
        }
        return messageDateObject.format('YYYY-MM-DD HH:mm:ss');
    };
    //_id이건 mongoDB에서 제공하는 고유번호입니다.
    return (
        <div>
            {messageList.map((message, index) => {
                return (
                    <Container key={message._id} className="message-container">
                        {message.user.name === 'system' ? (
                            <div className="system-message-container">
                                <p className="system-message">{message.chat}</p>
                            </div>
                        ) : message.user.name === user.name ? (
                            <div className="my-message-container">
                                <div className="time">{getFormattedDate(message.date)}</div>
                                <div className="my-message">{message.chat}</div>
                            </div>
                        ) : (
                            <div className="your-message-container">
                                <img
                                    src="/profile.jpeg"
                                    className="profile-image"
                                    style={
                                        (index === 0
                                            ? { visibility: 'visible' }
                                            : messageList[index - 1].user.name === user.name) ||
                                        messageList[index - 1].user.name === 'system'
                                            ? { visibility: 'visible' }
                                            : { visibility: 'hidden' }
                                    }
                                />
                                <div>
                                    <span className="userName">{user.name}</span>
                                    <div className="your-container">
                                        <div className="your-message">{message.chat}</div>
                                        <div className="time">{getFormattedDate(message.date)}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Container>
                );
            })}
        </div>
    );
};

export default MessageContainer;
