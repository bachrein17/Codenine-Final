import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LatestNotifications from '../components/notifikasiterbaru';
import FollowerNotifications from '../components/notifpengguna';
import RecommendedAccounts from '../components/rekomenakun';
import '../styles/notifikasi.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotificationPage = () => {
  const dummyNotifications = {
    latestNotifications: [
      { profileImage: 'profilnotif-1.png', username: 'user1', action: 'liked your post' },
      { image: 'notif1.jpg', title: 'New Event', message: 'You have a new event' }
    ],
    followerNotifications: [
      { type: 'follow', username: 'user2', actionAccepted: true, image: 'profilnotif-1.png' },
      { type: 'friendRequest', username: 'user3', image: 'profilnotif-1.png' }
    ],
    recommendedAccounts: [
      { username: 'user4', image: 'profilnotif-1.png' },
      { username: 'user5', image: 'profilnotif-1.png' }
    ]
  };

  const { latestNotifications, followerNotifications, recommendedAccounts } = dummyNotifications;
  const images = require.context('../image', true);

  return (
    <div>
      <Navbar />
      <div className="notifications-page">
        <div className="container">
          <h2>Notifications</h2>
          <div className="row">
            <div className="col-md-6">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={images('./notif-terbaru.png')} style={{ width: '40px' }} className="img-fluid" alt="Gambar" />
                <p style={{ marginLeft: '10px', marginTop: '10px', fontSize: '28px' }}>Notifikasi Terbaru</p>
              </div>
              <LatestNotifications notifications={latestNotifications} />
            </div>
            <div className="col-md-6">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={images('./notif-pengguna.png')} style={{ width: '40px' }} className="img-fluid" alt="Gambar" />
                <p style={{ marginLeft: '10px', marginTop: '10px', fontSize: '28px' }}>Notifikasi Pengguna</p>
              </div>
              <FollowerNotifications notifications={followerNotifications} />
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <img src={images('./rekomen-pengguna.png')} style={{ width: '40px' }} className="img-fluid" alt="Gambar" />
                <p style={{ marginLeft: '10px', marginTop: '10px' }}>Rekomendasi Pengguna</p>
              </div>
              <RecommendedAccounts recommendations={recommendedAccounts} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotificationPage;
