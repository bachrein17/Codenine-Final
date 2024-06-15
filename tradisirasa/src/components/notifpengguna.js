import React from 'react';
import UserNotificationItem from './notifpenggunafollower';
import FriendRequestNotification from './notifpenggunareq';

const UserNotifications = ({ notifications, onRemoveNotification }) => {
  return (
    <div className="user-notifications">
      <ul>
        {notifications.map((notification, index) => (
          notification.type === 'friendRequest' ? (
            <FriendRequestNotification key={index} notification={notification} onRemoveNotification={onRemoveNotification} />
          ) : (
            <UserNotificationItem key={index} notification={notification} onRemoveNotification={onRemoveNotification} />
          )
        ))}
      </ul>
    </div>
  );
};

export default UserNotifications;
