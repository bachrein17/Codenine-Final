import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardFavorit from '../components/favoritcard';

const Favorit = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="judul">
                    <h2 style={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontWeight: '600',
                        fontStyle: 'normal',
                        marginTop: '77px'
                    }}>
                        Favorit
                    </h2>
                    <p style={{
                        marginTop: '20px',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        Rahasia Kelezatan Tersembunyi dalam Setiap Resep Favorit!
                    </p>
                </div>
                <div className="search-container" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '706px',
                    height: '70px',
                    margin: '0 auto',
                    border: '3px solid #ccc',
                    borderRadius: '10px',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingLeft: '10px',
                    marginTop: '40px',
                }}>
                    <input
                        type="text"
                        placeholder="Cari Resep Favoritmu"
                        style={{
                            border: 'none',
                            outline: 'none',
                            width: '100%',
                            color: 'red'
                        }}
                    />
                    <button style={{
                        background: 'linear-gradient(to right, #FF2525, #FFA800)',
                        border: 'none',
                        padding: '2px',
                        borderRadius: '10px',
                        cursor: 'pointer'
                    }}>
                        <i className="las la-paper-plane"></i>
                    </button>
                </div>

                <div className="text1">
                <h2 style={{ 
                        fontWeight: '600', 
                        fontStyle: 'normal', 
                        marginTop: '31px' 
                    }}>
                        Buat Sarapan (12)
                    </h2>
                    <div className='cardfavorit' style={{display:'flex', flexWrap: 'wrap'}}>
                        <CardFavorit
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                        <CardFavorit
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                        <CardFavorit
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                    </div>
                </div>
                <div className="text2">
                <h2 style={{ 
                        fontWeight: '600', 
                        fontStyle: 'normal', 
                        marginTop: '31px' 
                    }}>
                        Buat Sarapan (12)
                    </h2>
                    <div className='cardfavorit' style={{display:'flex', flexWrap: 'wrap'}}>
                        <CardFavorit
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                        <CardFavorit
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                        <CardFavorit
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                    </div>
                </div>
                <div className="text3">
                <h2 style={{ 
                        fontWeight: '600', 
                        fontStyle: 'normal', 
                        marginTop: '31px' 
                    }}>
                        Buat Sarapan (12)
                    </h2>
                    <div className='cardfavorit' style={{display:'flex', flexWrap: 'wrap'}}>
                        <CardFavorit
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                        <CardFavorit
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                        <CardFavorit
                            image="./favorit1.png"
                            porsi="1 Porsi"
                            waktu="30 Menit"
                            title="Bebek Bumbu Hitam Brodi"
                            publisher="Tretan Muslim"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Favorit;
