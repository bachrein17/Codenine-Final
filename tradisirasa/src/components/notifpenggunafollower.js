import React from 'react';

const UserNotificationItem = ({ notification }) => {
  return (
    <li className="user-notification-item">
      <div className="user-notification-content" style={{ display: 'flex', alignItems: 'flex-end' }}>
        <img src={notification.image} alt="User" className="user-img" />
        <div style={{ display: 'flex' }}>
          <p>{notification.username}</p>
          {notification.actionAccepted && <p style={{ marginLeft: '5px' }}>Telah menerima permintaan mengikuti anda!</p>}
        </div>
      </div>
    </li>
  );
};

export default UserNotificationItem;
