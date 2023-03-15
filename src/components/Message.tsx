import React from 'react';
import { ContextProps, UserAuth } from '../context/AuthContext';

interface ChatMessage {
  content: string;
  avatar: string;
  sender: string;
  uid: string;
}

const Message = ({ message }: { message: ChatMessage }) => {
  
  const { currentUser } = UserAuth() as ContextProps;

  return (
    <div>
      <div className={`chat ${message.uid === currentUser.uid ? 'chat-end' : 'chat-start'}`}>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img src={message.avatar} />
          </div>
        </div>
        <div className='chat-header'>
          {message.sender}{' '}
          <time className='text-xs opacity-50'>
            {/* {new Date().toLocaleTimeString()} */}
          </time>
        </div>
        <div className='chat-bubble'>{message.content}</div>
      </div>
    </div>
  );
};

export default Message;
