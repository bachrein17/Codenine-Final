import React from 'react';

const NotificationWithImage = ({ notification }) => {
  return (
    <div className="notification-with-image" style={{ display: 'flex' }}>
      <div className="notification-img-container">
        <img src={notification.image} alt="Notification" className="notification-img" />
      </div>
      <div className="notification-content" style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginTop: '2px' }}>{notification.title}</p>
        <p style={{ marginTop: '2px', marginLeft: '5px' }}>{notification.message}</p>
      </div>
    </div>
  );
};

export default NotificationWithImage;
