import React, { useState } from 'react';

const RecommendedAccounts = ({ recommendations }) => {
  const [following, setFollowing] = useState(Array(recommendations.length).fill(false));

  const handleFollowClick = (index) => {
    setFollowing((prevFollowing) => {
      const newFollowing = [...prevFollowing];
      newFollowing[index] = !newFollowing[index];
      return newFollowing;
    });
  };

  return (
    <div className="account-recommendations">
      <ul>
        {recommendations.map((account, index) => (
          <li key={index} className="recommendation-item">
            <img src={account.image} alt="Account" className="recommendation-img" />
            <div className="recommendation-content">
              <p>{account.username}</p>
            </div>
            <button
              className={`action-buttonnotif ${following[index] ? 'following' : ''}`}
              onClick={() => handleFollowClick(index)}
            >
              {following[index] ? 'Mengikuti' : 'Ikuti'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedAccounts;
