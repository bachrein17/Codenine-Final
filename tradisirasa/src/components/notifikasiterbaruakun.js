import React from 'react';

const AccountNotification = ({ account }) => {
  return (
    <div className="account-notification" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="account-img-container">
        <img src={account.profileImage} alt="Account" className="account-img" />
      </div>
      <div className="account-content" style={{ display: 'flex', fontSize: '14px' }}>
        <p style={{ marginTop: '17px', marginLeft: '5px' }}>{account.username}</p>
        <p style={{ marginTop: '17px', marginLeft: '5px' }}>{account.action}</p> 
      </div>
    </div>
  );
};

export default AccountNotification;
