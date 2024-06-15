import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import RecipeCarousel from '../components/recipecarousel';
import ArticleCard from '../components/artikelcard';
import ForumCardWithImage from '../components/forumgambar';
import ForumCardWithoutImage from '../components/forumtanpagambar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage.css';

const images = require.context('../image', true);

const Body = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <header className="container-fluid banner">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div>
                <h1 className="Judul">Tradisi Rasa: Menyajikan Kelezatan Resep Tradisional Nusantara</h1>
                <h5 className="tentang small" style={{ fontWeight: 550, paddingBottom: '50px' }}>
                  Sambutlah keajaiban rasa dari berbagai penjuru Nusantara di Tradisi Rasa, tempat di mana kami dengan bangga melestarikan dan membagikan resep tradisional yang telah turun-temurun. Jelajahi keunikan setiap hidangan, nikmati cerita di balik setiap racikan bumbu, dan ikut serta dalam menjaga keberlanjutan warisan kuliner kita bersama-sama. Mari bersama merayakan keanekaragaman cita rasa yang kaya dan tak terlupakan!
                </h5>
              </div>
              <button className="custom-btn">Jelajahi Resep</button>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="text-center">
                <img src={images('./Mask group.png')} className="img-fluid" alt="Gambar" />
              </div>
            </div>
          </div>
        </header>
      </div>

      <section className="tipe">
        <div>
          <img src={images('./Mask group-1.png')} alt="" />
          <h5>Makasan Tradisional</h5>
        </div>
        <div>
          <img src={images('./Mask group-2.png')} alt="" />
          <h5>Resep Makan Malam</h5>
        </div>
        <div>
          <img src={images('./Mask group-3.png')} alt="" />
          <h5>Resep Sarapan</h5>
        </div>
        <div>
          <img src={images('./Mask group-4.png')} alt="" />
          <h5>Masakan Hari Raya</h5>
        </div>
        <div>
          <img src={images('./Mask group-5.png')} alt="" />
          <h5>Dessert</h5>
        </div>
      </section>

      <div class="container">
        <div class="cuaca">
          <p>Bagaimana kondisi cuaca di daerah anda?</p>
          <div class="logok">
            <a href="/cuacapanas" class="bannerc">
              <p className='bannercuacatxthp'>Cuaca Hari Ini <br/> Sangat Panas</p>
              <img className='awancerahhp' src={images('./awancerah.png')} alt="Awan Cerah" />
              <img className='mataharihp' src={images('./matahari.png')} alt="Matahari" />
            </a>
            <a href="/cuacadingin" class="bannerc">
            <p className='bannercuacatxthp'>Cuaca Hari Ini <br /> Sangat Dingin <br /> dan Mendung</p>
              <img className='awanmendunghp' src={images('./awanmendung.png')} alt="Awan Mendung" />
              <img className='petirkecilhp' src={images('./petir1.png')} alt="Petir" />
              <img className='petirbesarhp' src={images('./petir1.png')} alt="Petir" />
            </a>
          </div>
        </div>

        <div className="resep" id="resep">
          <h1>Resep - Resep</h1>
          <p style={{ textAlign: 'center' }}>
            Sambutlah petualangan rasa yang autentik dengan koleksi resep kami, hadirkan kelezatan sejati dari setiap sudut Nusantara langsung ke meja makan Anda.
          </p>
          <div id="CarouselResep" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <RecipeCarousel />
            </div>
          </div>
        </div>

        <section className="artikel">
          <h1 style={{ textAlign: 'center' }}>Artikel</h1>
          <p style={{ textAlign: 'center' }}>
            Temukan inspirasi masak yang tak terbatas dengan artikel kami yang penuh dengan tips, trik, dan informasi terkini tentang kuliner dari seluruh Nusantara.
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-3">
            <ArticleCard image={images('./artikel-1.png')} title="Sejarah Lapis Legit, Kue Wajib di Imlek Hasil Akulturasi Budaya Indonesia dan Belanda." />
            <ArticleCard image={images('./artikel-2.png')} title="Tips Nastar, Kue Kering Isi Nanas, Sajian Hari Raya yang Anti Pecah dan Lumer di Mulut!" />
            <ArticleCard image={images('./artikel-3.png')} title="Rawon : Aroma dan Kelezatan Makanan Khas Jawa Timur." />
            <ArticleCard image={images('./artikel-4.png')} title="Olahan Kurma Yang Manis dan Enak Khusus Untuk Menemani Buka Puasamu !" />
            <ArticleCard image={images('./artikel-5.png')} title="Bahan Bahan Makanan Sehat yang Berisi Sayur Sayur yang Mudah dan Enak Dibuat." />
            <ArticleCard image={images('./artikel-6.png')} title="Kelezatan Citarasa Rendang, Kuliner Nusantara yang Terkenal Hingga Ke Mancanegara." />
          </div>
          <div className="artikelain text-center" style={{ paddingTop: '20px' }}>
            <a href="/artikel" className="btn btn-primary btn-custom">Lihat artikel lainnya</a>
          </div>
        </section>

        <section className="forum" id="forum">
          <div className="headerforum">
            <h1 style={{ textAlign: 'center' }}>Forum</h1>
            <p style={{ textAlign: 'center' }}>
              Bergabunglah dengan komunitas kami! Bagikan resep unikmu, inspirasi kuliner, dan jadilah bagian dari perjalanan kulinermu yang seru bersama kami.
            </p>
          </div>
          <div className="grid-container">
            <ForumCardWithImage
              image={images('./forum-1.png')}
              title="Sosis untuk bakar bakaran"
              description="Sosis yang enak, lezat, krenyes krenyes, dan gurih
                enak
                buat bakaran apa ya bunn? Sama bumbu yang enak buat bakar bakaran apa
                yachhhh?
                Soalnya kan mau tahun baru nichhh"
              uploadedTime="Diunggah 5 menit yang lalu"
              profileImage={images('./profilakun1.png')}
              profileName="Bunda Lesty"
              profileRole="Ibu Rumah Tangga"
              likeCount="likeCount1"
              viewCount="viewCount1"
              commentCount="commentCount1"
            />
            <ForumCardWithImage
              image={images('./forum-2.png')}
              title="Saran resep masakan autentik"
              description="Saya ingin memasak hidangan tradisional autentik untuk
                momen istimewa dengan keluarga, tetapi saya bingung memilih resep dan
                bumbu yang tepat. Ada saran untuk hidangan tradisional yang bisa saya
                coba....."
              uploadedTime="5"
              profileImage={images('./profilakun2.png')}
              profileName="Mami Indah"
              profileRole="Ibu Rumah Tangga"
              likeCount="likeCount2"
              viewCount="viewCount2"
              commentCount="commentCount2"
            />
            <ForumCardWithoutImage
              title="Menu Hari Lebaran: Rendang Medium Rare"
              description="Saya memasak rendang untuk menu lebaran, baiknya saya presto dahulu
                atau saya buat medium rare?"
              uploadedTime="Diunggah 30 menit yang lalu"
              profileImage={images('./profilakun3.png')}
              profileName="Ibu Septi"
              profileRole="Ibu Rumah Tangga"
              likeCount="likeCount3"
              viewCount="viewCount3"
              commentCount="commentCount3"
            />
            <ForumCardWithoutImage
              title="Bagaimana tips Memasak"
              description="Saya hanya punya panci 32 inc, tapi mau buat kepala kerbau, apakah
                itu bisa?"
              uploadedTime="12"
              profileImage={images('./profilakun4.png')}
              profileName="Hendriyatno"
              profileRole="Mahasiswa 2 Digit"
              likeCount="likeCount4"
              viewCount="viewCount4"
              commentCount="commentCount4"
            />
          </div>
          <div className="forumlain text-center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <a href="/forum" className="btn btn-primary btn-custom">Forum Lainnya</a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Body;
