import React, { useState } from 'react';
import {
  Button,
  Tooltip,
  Dropdown,
  Typography,
  Menu,
  Avatar,
  Space,
  Drawer,
  Input,
  Spin,
} from 'antd';
import { SearchOutlined, BellOutlined, DownOutlined } from '@ant-design/icons';
import { chatState } from '../../context/ChatProvider';
import ProfileModal from './ProfileModal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import ChatLoading from '../ChatLoading';
import UserListItem from '../UserAvatar/UserListItem';
import { getSender } from '../../config/ChatLogic';

const { Text } = Typography;

const Sidedrawer = () => {
  const {
    user,
    setSelectedChat,
    chats,
    setChats,
    notification,
    setNotification,
  } = chatState();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
    setOpen(true);
    setPlacement('left');
  };
  const onClose = () => {
    setOpen(false);
  };

  const logOutUser = async () => {
    if (!user?.id) {
      toast.error('User ID not found. Unable to log out.');
      return;
    }

    try {
      const url = 'http://localhost:3000';
      await axios.post(`${url}/api/user/logout`, { userId: user.id });

      // Clear local storage and context
      localStorage.removeItem('userInfo');
      // setUser(null);

      toast.success('Logged out successfully!');
      navigate('/'); // Redirect to the login page
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Failed to log out. Please try again.'
      );
    }
  };

  // Notifications menu
  // const notificationMenu = (
  //   <Menu>
  //     <Menu.Item key='1'>No new notifications</Menu.Item>
  //   </Menu>
  // );
  const notificationMenu = (
    <Menu>
      {!notification.length ? (
        <Menu.Item key='0'>No new notifications</Menu.Item>
      ) : (
        notification.map((notif) => (
          <Menu.Item
            key={notif._id}
            onClick={() => {
              setSelectedChat(notif.chat);
              setNotification(notification.filter((n) => n !== notif));
            }}
          >
            {notif.chat.isGroupChat
              ? `New Message in ${notif.chat.chatName}`
              : `New Message from ${getSender(user, notif.chat.users)}`}
          </Menu.Item>
        ))
      )}
    </Menu>
  );

  // Account menu
  const accountMenu = (
    <Menu>
      {/* Profile Menu Item with ProfileModal */}
      <Menu.Item
        key='1'
        style={{ cursor: 'default' }} // Prevent hover style
      >
        <ProfileModal user={user}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Profile</span>
          </div>
        </ProfileModal>
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key='2' onClick={() => console.log('Go to settings')}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3' onClick={logOutUser}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const handleSearch = async () => {
    if (!search.trim()) {
      toast.error('Please enter something in the search');
      return;
    }
    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`, // Ensure token is included
        },
      };
      const url = 'http://localhost:3000';
      const { data } = await axios.get(
        `${url}/api/user?search=${encodeURIComponent(search.trim())}`,
        config
      );

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      setLoading(false); // Stop loading spinner on error
      toast.error(
        error.response?.data?.message || 'Failed to load search results'
      );
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);

      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
      };
      const url = 'http://localhost:3000';
      const { data } = await axios.post(`${url}/api/chat`, { userId }, config);
      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

      setSelectedChat(data);
      setLoadingChat(false);
      // console.log(data);
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error fetching the chat');
    }
  };

  return (
    <>
      <div className='flex justify-between items-center bg-white border-[0.5em] py-[0.25em] px-[1em]'>
        {/* Search */}
        <Tooltip placement='bottomRight' title='Search Users to chat'>
          <Button onClick={showDrawer} icon={<SearchOutlined />} type='text'>
            Search User
          </Button>
        </Tooltip>

        {/* App Title */}
        <Text>QuickChat</Text>

        {/* Notifications and Account Menus */}
        <div className='flex items-center gap-4'>
          {/* Notifications */}
          <Dropdown
            overlay={notificationMenu}
            placement='bottomRight'
            trigger={['click']}
          >
            <Button icon={<BellOutlined />} type='text' />
          </Dropdown>

          {/* Account */}
          <Dropdown
            overlay={accountMenu}
            placement='bottomRight'
            trigger={['click']}
          >
            <Space>
              <Avatar size='small' src={user?.profilePic || undefined}>
                {/* Fallback to initials if profilePic is null */}
                {user?.profilePic
                  ? null
                  : user?.name
                      ?.split(' ')
                      .map((part) => part.charAt(0).toUpperCase())
                      .join('')}
              </Avatar>
              <Text>{user?.name}</Text>
              <DownOutlined />
            </Space>
          </Dropdown>
        </div>
      </div>

      <Drawer
        title='Search Users'
        placement={placement}
        closable
        onClose={onClose}
        open={open}
        key={placement}
      >
        {/* Search Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            paddingBottom: '1rem',
            borderBottom: '1px solid #f0f0f0',
            marginBottom: '1rem',
          }}
        >
          <Input
            placeholder='Search by name or email'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            allowClear
            style={{ flex: 1 }}
          />
          <Button
            type='primary'
            icon={<SearchOutlined />}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>

        {/* Search Results */}
        {loading ? (
          <ChatLoading />
        ) : (
          <div
            style={{
              marginTop: '1rem',
              maxHeight: '400px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {searchResult.length > 0 ? (
              searchResult.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  color: '#999',
                  marginTop: '2rem',
                  fontSize: '16px',
                }}
              >
                No results found
              </div>
            )}
          </div>
        )}
        {loadingChat && <Spin tip='Loading chats...' />}
      </Drawer>
    </>
  );
};

export default Sidedrawer;
