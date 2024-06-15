import React from 'react';
import AccountNotification from './notifikasiterbaruakun';
import NotificationWithImage from './notifikasiterbarugambar';


const LatestNotifications = ({ notifications }) => {
  return (
    <div className="latest-notifications">
      {notifications.map((notification, index) => (
        <React.Fragment key={index}>
          <div className="notification-item">
            {notification.image ? (
              <NotificationWithImage notification={notification} />
            ) : (
              <AccountNotification account={notification} />
            )}
          </div>
          <div className="notification-divider"></div> {/* Garis pemisah setelah setiap notifikasi */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LatestNotifications;
