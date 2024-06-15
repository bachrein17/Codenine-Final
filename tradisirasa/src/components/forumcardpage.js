import React from 'react';
import '../styles/forum.css';
import likeimg from '../image/like.png';
import viewimg from '../image/view.png';
import commentimg from '../image/comment.png';

const ForumCardPage = ({ image, title, tags, uploadedTime, profileImage, profileName, profileRole, likeCount, viewCount, commentCount }) => {
  const likeClicked = (elementId) => {
    const likeCountElement = document.getElementById(elementId);
    const currentLikeCount = parseInt(likeCountElement.innerText);
    if (likeCountElement.classList.contains('liked')) {
      likeCountElement.innerText = currentLikeCount - 1;
      likeCountElement.classList.remove('liked');
    } else {
      likeCountElement.innerText = currentLikeCount + 1;
      likeCountElement.classList.add('liked');
    }
  };

  const viewClicked = () => {
    window.location.href = '/fullpost'; 
  };

  const commentClicked = () => {
    window.location.href = '/comments'; 
  };

  return (
    <div className="col">
      <div className="card">
        <div className="card-header" style={{ backgroundColor: 'transparent', border: 'none' }}>
          <div className="row">
            <div className="col-md-4">
              <img src={image} className="card-img" alt="Leftimg" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-tags" style={{display:'flex', flexWrap:'wrap'}}>
                  {tags.map((tagfr, index) => (
                    <span key={index} className="tagfr">
                      <span className="border-custom">{tagfr}</span>
                    </span>
                  ))}
                </div>
                <p className="lastupdate">Diunggah {uploadedTime} yang lalu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body profile-info">
          <img src={profileImage} className="rounded-circle" alt="Profile pic" />
          <div className="profileakun">
            <p className="mb-0" style={{ marginLeft: '10px' }}>{profileName}</p>
            <small className="text-muted">{profileRole}</small>
          </div>
          <div>
            <span className="border-custom">
              <button onClick={() => likeClicked(likeCount)}>
                <img src={likeimg} alt="Like" style={{ width: '15px', height: '12px', marginRight: '10px' }} /><span id={likeCount}>0</span>
              </button>
            </span>
            <button className="border-custom" onClick={viewClicked}>
              <img src={viewimg} alt="View" style={{ width: '15px', height: '12px', marginRight: '10px' }} /><span id={viewCount}>0</span>
            </button>
            <button className="border-custom" onClick={commentClicked}>
              <img src={commentimg} alt="Comment" style={{ width: '14px', height: '12px', marginRight: '10px' }} /><span id={commentCount}>0</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumCardPage;
