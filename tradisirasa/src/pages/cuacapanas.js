import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardResep from '../components/cardresep';
import '../styles/cuaca.css';


const images = require.context('../image', true);

const CuacaDingin = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="back" style={{ marginTop: '20px' }}>
                    <a href="/">
                        <img src={images('./back.png')} alt="back" />
                    </a>
                </div>
                <section className="judulcuaca" style={{ marginBottom: '20px', marginTop: '20px' }}>
                    <h1 style={{ textAlign: 'center' }}>Bagikan Kreativitasmu di Dapur: Unggah Resepmu dan Inspirasi Kuliner di Sini!</h1>
                    <p style={{ textAlign: 'center' }}>
                        Sambutlah petualangan kulinermu dengan kelezatan autentik Indonesia yang tak <br />
                        tertandingi. Temukan resep yang sesuai selera dan kebutuhanmu di sini!
                    </p>
                        <div className='bannercuaca'>
                            <p className='bannercuacatxt'>Cuaca Hari ini <br />Sangat Panas</p>
                            <img className='awancerah' src={images('./awancerah.png')} alt="Awan Cerah" />
                            <img className='matahari' src={images('./matahari.png')} alt="Matahari" />
                        </div>

                    <div className="row row-cols-1 row-cols-md-3 g-1" style={{ display: 'flex' }}>
                        <CardResep
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                        <CardResep
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                        <CardResep
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                        <CardResep
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                        <CardResep
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default CuacaDingin;
