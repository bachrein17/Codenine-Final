import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ArticleCard from '../components/artikelcard';

const images = require.context('../image', true);

const Artikel = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="back" style={{marginTop:'20px'}}>
                    <a href="/">
                        <img src={images('./back.png')} alt="back" />
                    </a>
                </div>
                <section className="artikel" style={{ marginBottom: '20px' }}>
                    <h1 style={{ textAlign: 'center' }}>Artikel</h1>
                    <p style={{ textAlign: 'center' }}>
                        Temukan inspirasi masak yang tak terbatas dengan artikel kami yang penuh dengan
                        <br />
                        tips, trik, dan informasi terkini tentang kuliner dari seluruh Nusantara.
                    </p>
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        <ArticleCard 
                            image={images('./artikel-1.png')} 
                            title="Sejarah Lapis Legit, Kue Wajib di Imlek Hasil Akulturasi Budaya Indonesia dan Belanda." 
                            link="/artikel/1" 
                        />
                        <ArticleCard 
                            image={images('./artikel-2.png')} 
                            title="Tips Nastar, Kue Kering Isi Nanas, Sajian Hari Raya yang Anti Pecah dan Lumer di Mulut!" 
                            link="/detailartikel" 
                        />
                        <ArticleCard 
                            image={images('./artikel-3.png')} 
                            title="Rawon : Aroma dan Kelezatan Makanan Khas Jawa Timur." 
                            link="/artikel/3" 
                        />
                        <ArticleCard 
                            image={images('./artikel-4.png')} 
                            title="Olahan Kurma Yang Manis dan Enak Khusus Untuk Menemani Buka Puasamu !" 
                            link="/artikel/4" 
                        />
                        <ArticleCard 
                            image={images('./artikel-5.png')} 
                            title="Bahan Bahan Makanan Sehat yang Berisi Sayur Sayur yang Mudah dan Enak Dibuat." 
                            link="/artikel/5" 
                        />
                        <ArticleCard 
                            image={images('./artikel-6.png')} 
                            title="Kelezatan Citarasa Rendang, Kuliner Nusantara yang Terkenal Hingga Ke Mancanegara." 
                            link="/artikel/6" 
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Artikel;
