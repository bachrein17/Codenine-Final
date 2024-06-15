import React from 'react';
import './footer.css';
import logoFooter from '../image/logo-footer.png';
import facebookIcon from '../image/facebookicon.png';
import instagramIcon from '../image/igicon.png';
import youtubeIcon from '../image/youtubeicon.png';

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="container">
          <div className="tradisirasafooter">
            <h3>Tradisi Rasa</h3>
            <div className="deskripsi">
              <img src={logoFooter} alt="Logo Tradisi Rasa" />
              <p className="text-break">Bergabunglah dalam perjalanan memasak yang memperkaya di forum kami, di mana resep-resep terbaik bermuara pada satu cita rasa: tradisional.</p>
            </div>
          </div>
          <div className="sitemap">
            <h3>Site Map</h3>
            <div className="sitemapk">
              <ul className="nostyle">
                <li><a href="#">Favorit</a></li>
                <li><a href="forum.html">Forum</a></li>
              </ul>
              <ul className="ul2">
                <li><a href="#">Resep</a></li>
                <li><a href="#">Unggah Resep</a></li>
              </ul>
            </div>
          </div>
          <div className="socmed">
            <h3>Social Media</h3>
            <ul className="nostyle">
              <li><a href="#"><img src={facebookIcon} alt="Facebook Icon" /> Tradisi Rasa</a></li>
              <li><a href="#"><img src={instagramIcon} alt="Instagram Icon" /> Tradisi.Rasa</a></li>
              <li><a href="#"><img src={youtubeIcon} alt="Youtube Icon" /> Tradisi Rasa</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="footer2">
        <p>All Right Reserved</p>
      </footer>
    </div>
  );
}

export default Footer;