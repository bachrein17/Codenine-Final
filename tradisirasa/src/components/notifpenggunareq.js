import React, { useState } from 'react';

const FriendRequestNotification = ({ notification, onRemoveNotification }) => {
  const [actionText, setActionText] = useState('Terima');
  const [isActionTaken, setIsActionTaken] = useState(false);
  const [isXButtonVisible, setIsXButtonVisible] = useState(true);
  const [hoverText, setHoverText] = useState(false);

  const handleActionClick = () => {
    if (!isActionTaken) {
      setActionText('Ikuti Balik');
      setIsActionTaken(true);
      setIsXButtonVisible(false);
    } else if (actionText === 'Telah Mengikuti') {
      setActionText('Ikuti Balik');
    } else {
      setActionText('Telah Mengikuti');
    }
  };

  const handleRemoveNotification = () => {
    onRemoveNotification(notification.id);
  };

  return (
    <div className="friend-request-notification" style={{ display: 'flex', alignItems: 'flex-end', margin: '10px 0' }}>
      <img src={notification.image} alt="User" className="user-img" />
      <div className="user-notification-content">
        <p>{notification.username}</p>
        <p
          style={{ marginLeft: '5px', color: hoverText ? 'red' : 'inherit', pointerEvents: 'none' }}
          onMouseEnter={() => setHoverText(true)}
          onMouseLeave={() => setHoverText(false)}
          onClick={() => hoverText && setActionText(isActionTaken ? 'Batal mengikuti' : 'Telah mengikuti')}
        >
          {isActionTaken ? 'Telah mengikuti anda' : 'Ingin mengikuti anda'}
        </p>
      </div>
      <div>
        {!isActionTaken && (
          <button className="action-buttonnotif" onClick={handleActionClick}>
            {actionText}
          </button>
        )}
        {isActionTaken && (
          <button className="action-buttonnotif" onClick={handleActionClick}>
            {actionText}
          </button>
        )}
        {isXButtonVisible && (
          <button className="action-buttoncancel" onClick={handleRemoveNotification}>
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default FriendRequestNotification;
