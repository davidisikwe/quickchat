// import React from 'react';
// import { Tooltip, Avatar } from 'antd';
// import ScrollableFeed from 'react-scrollable-feed';
// import {
//   isSameSender,
//   isLastMessage,
//   isSameSenderMargin,
//   isSameUser,
// } from '../config/ChatLogic';
// import { chatState } from '../context/ChatProvider';
// const ScrollableChat = ({ messages }) => {
//   const { user } = chatState();
//   return (
//     <ScrollableFeed>
//       {messages &&
//         messages.map((m, i) => {
//           console.log('Sender Object:', m.sender);
//           return (
//             <div key={m._id} className='flex'>
//               {(isSameSender(messages, m, i, user.id) ||
//                 isLastMessage(messages, i, user.id)) && (
//                 <Tooltip placement='bottom' title={m.sender?.name}>
//                   <Avatar size='small' src={m.sender?.profilePic || undefined}>
//                     {m.sender?.profilePic
//                       ? null
//                       : m.sender?.name
//                           ?.split(' ')
//                           .map((part) => part.charAt(0).toUpperCase())
//                           .join('')}
//                   </Avatar>
//                 </Tooltip>
//               )}
//               <span
//                 style={{
//                   backgroundColor: `${
//                     m.sender._id === user.id ? 'BEE3F8' : '#B9F5D0'
//                   }`,
//                   borderRadius: '20px',
//                   padding: '5px 15px',
//                   maxWidth: '75%',
//                   marginLeft: isSameSenderMargin(messages, m, i, user.id),
//                   marginTop: isSameUser(messages, m, i, user.id) ? 3 : 10,
//                 }}
//               >
//                 {m.content}
//               </span>
//             </div>
//           );
//         })}
//     </ScrollableFeed>
//   );
// };

// export default ScrollableChat;

//--------------------------------------------------------------------------------------//

import React from 'react';
import { Tooltip, Avatar } from 'antd';
import ScrollableFeed from 'react-scrollable-feed';
import {
  isSameSender,
  isLastMessage,
  isSameSenderMargin,
  isSameUser,
} from '../config/ChatLogic';
import { chatState } from '../context/ChatProvider';

const ScrollableChat = ({ messages }) => {
  const { user } = chatState();

  return (
    <ScrollableFeed>
      {messages?.map((m, i) => {
        console.log('Message:', m);

        return (
          <div key={m._id} className='flex'>
            {/* Render Avatar */}
            {m.sender._id !== user.id &&
              (isSameSender(messages, m, i, user.id) ||
                isLastMessage(messages, i)) && (
                <Tooltip placement='bottom' title={m.sender?.name}>
                  <Avatar size='small' src={m.sender?.profilePic || undefined}>
                    {/* Fallback to initials if profilePic is missing */}
                    {!m.sender?.profilePic &&
                      m.sender?.name
                        ?.split(' ')
                        .map((part) => part.charAt(0).toUpperCase())
                        .join('')}
                  </Avatar>
                </Tooltip>
              )}

            {/* Render Message Content */}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user.id ? 'BEE3F8' : '#B9F5D0'
                }`,
                borderRadius: '20px',
                padding: '5px 15px',
                maxWidth: '75%',
                marginLeft: isSameSenderMargin(messages, m, i, user.id),
                marginTop: isSameUser(messages, m, i) ? 3 : 10,
              }}
            >
              {m.content}
            </span>
          </div>
        );
      })}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
