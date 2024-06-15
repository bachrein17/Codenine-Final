import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const SuccessPage = () => {
    const [recipeData, setRecipeData] = useState({});

    useEffect(() => {
        // Panggil endpoint backend untuk mendapatkan data resep
        axios.get('http://localhost:3001/api/recipes')
            .then(response => {
                // Set data resep ke state
                setRecipeData(response.data);
            })
            .catch(error => {
                console.error('Error fetching recipe data:', error);
                // Handle error jika permintaan gagal
            });
    }, []); // Lakukan hanya sekali setelah komponen dimuat

    return (
        <div>
            <Navbar />
            <div className="heading" style={{marginTop:'50px'}}>
                <h2 style={{ textAlign: 'center', margin: '0' }}>Resep Anda Berhasil Dibuat!</h2>
                <p style={{ textAlign: 'center', margin: '0' }}>Karya Kuliner Anda Siap Terbagikan: jelajahi kelezatan dunia rasa tanpa batas.</p>
                <p style={{ textAlign: 'center', margin: '0' }}>Jadilah inspirasi kuliner bagi orang lain dan temukan petualangan baru dalam setiap hidangan!</p>
            </div>

            <div className="container d-flex justify-content-center" style={{ paddingTop: '35px', paddingBottom: '5rem' }}>
                <div className="card" style={{ width: '48rem', padding: '35px', paddingBottom: '5px', borderRadius: '35px', background: 'linear-gradient(to top right, red 5%, orange)' }}>
                    <img src={recipeData.thumbnail} className="card-img-top" style={{ borderRadius: '40px', maxHeight:'200px', objectFit: 'cover' }} alt="Uploaded" />
                    <div className="card-body" style={{textAlign:'center', color:'white'}}>
                        <h5 className="card-title">{recipeData.judul}</h5>
                        <p>Publisher: {recipeData.publisher}</p>
                        <p className="card-text" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                            {recipeData.description}
                        </p>
                        <div className="text-center">
                            <a href="/detailresep" className="btn btn-light" style={{ color: '#ff2525', borderRadius: '25px' }}>Lihat Resep Anda</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SuccessPage;
