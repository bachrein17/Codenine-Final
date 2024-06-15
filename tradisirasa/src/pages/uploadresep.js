import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import gambardetailresep from '../image/gambardetailresep.png';

function UploadResep() {
    const [publisher, setPublisher] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState('');
    const [submitError, setSubmitError] = useState(''); // New state for submission errors

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (publisher.trim() === '') {
            setError('Nama penerbit tidak boleh kosong');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/recipes/upload', { publisher });
            console.log(response.data);

            // Redirect ke halaman selanjutnya setelah data berhasil disimpan
            window.location.href = '/uploaddetail';
        } catch (error) {
            console.error('Error:', error);
            setSubmitError('Gagal mengunggah resep, coba lagi nanti.'); // Display an error message
        }
    };

    const images = require.context('../image', true);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="back" style={{ marginTop: '20px' }}>
                    <a href="/">
                        <img src={images('./back.png')} alt="back" />
                    </a>
                </div>
            </div>
            <div className="heading">
                <h2 style={{ textAlign: 'center', fontSize: '26px', paddingTop: '4%', paddingBottom: '1%', flexWrap: 'wrap' }}>
                    Unggah Resepmu, Wujudkan Inspirasi Kuliner Bersama
                </h2>
            </div>

            <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="uploadawal d-none d-md-block" style={{ flex: 1, paddingBottom: '8%' }}>
                    <img src={gambardetailresep} alt="upload resep" style={{
                        display: 'flex',
                        maxWidth: '800px',
                        maxHeight: '400px',
                        marginLeft: 'auto',
                        borderRadius: '25px'
                    }} />
                </div>
                <div className="datauser" style={{ flex: 'auto', marginLeft: '20px', fontSize: '18px' }}>
                    <p>Hi! User</p>
                    <br />
                    <form onSubmit={handleSubmit} style={{ paddingBottom: '50px' }}>
                        <div className="mb-4">
                            <label htmlFor="exampleInputNama" className="form-label" style={{ fontWeight: '400' }}>Nama Penerbit</label>
                            <input type="text" className="form-control" id="exampleInputNama" placeholder="Publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} style={{
                                border: '2px solid #FF2525',
                                color: '#FF2525'
                            }} />
                            {error && <div style={{ color: 'red' }}>{error}</div>}
                        </div>
                        <div className="mb-4 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                style={{
                                    borderColor: 'red',
                                    borderRadius: '5px',
                                    backgroundColor: isChecked ? 'red' : 'transparent'
                                }}
                                id="exampleCheck1"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">Ingat Saya!</label>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" style={{
                            backgroundImage: 'linear-gradient(to right, red, orange)',
                            color: '#fff',
                            width: '100%',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            marginTop: '10px'
                        }}>
                            Lanjutkan
                        </button>
                        {submitError && <div style={{ color: 'red', marginTop: '10px' }}>{submitError}</div>}
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UploadResep;
