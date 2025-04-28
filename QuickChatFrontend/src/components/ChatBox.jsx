import React from 'react';
import { chatState } from '../context/ChatProvider';
import SingleChat from './SingleChat';

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = chatState();

  return (
    <div
      className={`${
        selectedChat ? 'flex' : 'hidden'
      } md:flex flex-col items-center p-4 bg-white w-full md:w-[68%] rounded-2xl shadow-md border border-gray-200 transition-all duration-300`}
      style={{
        height: '90vh',
        marginTop: '10px',
        overflow: 'hidden',
      }}
    >
      <div
        className="flex flex-col w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-lg"
        style={{
          padding: '10px',
          backgroundColor: '#f9fafb',
          borderRadius: '12px',
          boxShadow: 'inset 0 0 8px rgba(0,0,0,0.05)',
        }}
      >
        <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </div>
    </div>
  );
};

export default ChatBox;
