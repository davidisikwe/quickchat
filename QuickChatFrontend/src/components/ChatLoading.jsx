// import React from 'react';
// import { Skeleton, Space } from 'antd';

// const ChatLoading = () => {
//   return (
//     <Space direction='vertical' size='middle' style={{ width: '100%' }}>
//       <Skeleton.Input active />
//       <Skeleton.Input active />
//       <Skeleton.Input active />
//       <Skeleton.Input active />
//       <Skeleton.Input active />
//       <Skeleton.Input active />
//       <Skeleton.Input active />
//       <Skeleton.Input active />
//       <Skeleton.Input active />
//     </Space>
//   );
// };

// export default ChatLoading;

import React from 'react';
import { Skeleton, Space } from 'antd';

const ChatLoading = () => {
  return (
    <div className="w-full p-4 rounded-lg bg-white shadow-sm animate-pulse">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {[...Array(8)].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Skeleton.Avatar active size="large" shape="circle" />
            <div className="flex flex-col flex-grow gap-2">
              <Skeleton.Input active size="small" style={{ width: '60%' }} />
              <Skeleton.Input active size="small" style={{ width: '40%' }} />
            </div>
          </div>
        ))}
      </Space>
    </div>
  );
};

export default ChatLoading;

