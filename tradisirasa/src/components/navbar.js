import React from 'react';
import './navbar.css';
import logo from '../image/logo.png'; 
import notifHitam from '../image/notifhitam.png'; 
import akunHitam from '../image/akunhitam.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const closeNavbar = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ paddingLeft: '5%' }}>
          <img src={logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{ paddingRight: '5%' }}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ padding: '10px 10px' }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" onClick={closeNavbar}>Beranda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/forum" onClick={closeNavbar}>Forum</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/resep" onClick={closeNavbar}>Resep</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/favorit" onClick={closeNavbar}>Favorit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/uploadresep" onClick={closeNavbar}>Unggah Resep</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/notifikasi" onClick={closeNavbar}>
                <img src={notifHitam} alt="Notifikasi" className="icon-img" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="login" onClick={closeNavbar}>
                <img src={akunHitam} alt="Akun" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;