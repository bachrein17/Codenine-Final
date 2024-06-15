import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/uploaddetail.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const DetailUploadResep = () => {
    const [rincianBahan, setRincianBahan] = useState(['']);
    const [caramasak, setCaramasak] = useState([{ step: '', image: null }]);
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedIconImage, setUploadedIconImage] = useState(null);
    const [selectedPorsi, setSelectedPorsi] = useState('Untuk berapa porsi?');
    const [selectedWaktu, setSelectedWaktu] = useState('Berapa lama waktu memasak?');
    const [selectedKategori, setSelectedKategori] = useState('Termaksud kategori apa ?');
    const [description, setDescription] = useState('');
    const [judul, setJudul] = useState('');

    const handleJudulChange = (event) => {
        setJudul(event.target.value);
    };


    const handleSubmit = async () => {
        try {
            const recipeData = {
                judul,
                description,
                thumbnail: uploadedImage,
                bahanmasak: rincianBahan,
                caramasak,
                porsi: selectedPorsi,
                waktu: selectedWaktu,
                kategori: selectedKategori,
                tags
            };
    
            const response = await axios.post('http://localhost:3001/api/recipes/upload', recipeData);
            
            console.log(response.data); // Output respons dari backend (opsional)
    
            // Redirect ke halaman sukses setelah data berhasil diunggah
            window.location.href = '/sukses';
        } catch (error) {
            console.error('Error:', error);
            // Handle error jika permintaan gagal
        }
    };
    

    const handleThumbnailUpload = (event) => {
        const uploadedImage = URL.createObjectURL(event.target.files[0]);
        setUploadedImage(uploadedImage);
        localStorage.setItem('uploadedThumbnail', uploadedImage);
    };


    const handleBahanChange = (index, event) => {
        const newRincianBahan = [...rincianBahan];
        newRincianBahan[index] = event.target.value;
        setRincianBahan(newRincianBahan);
    };

    const addBahan = () => setRincianBahan([...rincianBahan, '']);

    const handleBahanKeyPress = (event) => {
        if (event.key === 'Enter') {
            addBahan();
        }
    };

    const removeBahan = (index) => {
        const newRincianBahan = rincianBahan.filter((_, i) => i !== index);
        setRincianBahan(newRincianBahan);
    };

    const handleCaramasakChange = (index, event) => {
        const newCaramasak = [...caramasak];
        newCaramasak[index].step = event.target.value;
        setCaramasak(newCaramasak);
    };

    const handleCaramasakImageChange = (index, event) => {
        const newCaramasak = [...caramasak];
        newCaramasak[index].image = URL.createObjectURL(event.target.files[0]);
        setCaramasak(newCaramasak);
    };

    const addCaramasak = () => setCaramasak([...caramasak, { step: '', image: null }]);

    const removeCaramasak = (index) => {
        const newCaramasak = caramasak.filter((_, i) => i !== index);
        setCaramasak(newCaramasak);
    };

    const handleTagInputChange = (event) => setTagInput(event.target.value);

    const handleTagInputKeyPress = (event) => {
        if (event.key === 'Enter' && tagInput.trim() !== '') {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const removeTag = (index) => {
        const newTags = tags.filter((_, i) => i !== index);
        setTags(newTags);
    };

    const handlePorsiSelect = (porsi) => {
        setSelectedPorsi(porsi);
    };

    const handleWaktuSelect = (waktu) => {
        setSelectedWaktu(waktu);
    };

    const handleKategoriSelect = (kategori) => {
        setSelectedKategori(kategori);
    };

    useEffect(() => {
        const savedUploadedImage = localStorage.getItem('uploadedImage');
        if (savedUploadedImage) {
            setUploadedImage(savedUploadedImage);
        }
    }, []);

    const handleImageUpload = (event) => {
        const uploadedImage = URL.createObjectURL(event.target.files[0]);
        setUploadedImage(uploadedImage);
        localStorage.setItem('uploadedImage', uploadedImage);
    };

    const handleIconImageUpload = (event) => {
        const uploadedIconImage = URL.createObjectURL(event.target.files[0]);
        setUploadedIconImage(uploadedIconImage);
        localStorage.setItem('uploadedImage', uploadedImage);
    };

    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
        localStorage.setItem('description', value); // Simpan deskripsi ke dalam localStorage saat nilai berubah
    };

    const images = require.context('../image', true);

    return (
        <div>
            <Navbar />
            <div className="back">
                <a href="/uploadresep">
                    <img src={images('./back.png')} alt="back" />
                </a>
            </div>
            <div className="judul">
                <h2>Bagikan Resep Andalanmu</h2>
            </div>

            {/* Detail Upload */}
            <div className="container">
                <div className="upload">
                    <label htmlFor="fileUpload" style={{ paddingBottom: '20px' }}>
                        <input
                            type="file"
                            id="fileUpload"
                            className="file-input"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        <img
                            id="gambarDetailResep"
                            src={uploadedImage || images('./unggahdisini.png')}
                            alt="upload resep"
                        />
                    </label>
                    <form>
                        <div className="nmasakan">
                            <label className="form-label">Nama Masakanmu</label>
                            <input
                                type="text"
                                className="nama-resep"
                                placeholder="Ketik nama masakanmu"
                                value={judul}
                                onChange={handleJudulChange}
                            />
                        </div>
                        <div className="penjelasan">
                            <label className="form-label">Penjelasan Resepmu</label>
                            <textarea
                                id="deskripsiResep"
                                className="deskripsi-resep"
                                placeholder="Deskripsikan cerita menarik tentang resepmu"
                                value={description}
                                onChange={handleDescriptionChange} // Tambahkan event handler untuk menangani perubahan deskripsi
                            ></textarea>
                        </div>
                        <label htmlFor="fileUpload2" className="btn btn-primary">
                            <input
                                type="file"
                                id="fileUpload2"
                                className="file-input"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                            <img
                                src={uploadedIconImage || images('./uploadicon.png')}
                                alt="uploadicon"
                                className="button-icon"
                            />
                            Unggah foto masakanmu
                        </label>
                    </form>
                </div>

                {/* Rincian Bahan */}
                <div className="rincian">
                    <h2>Masukan Rincian Bahan</h2>
                    {rincianBahan.map((bahan, index) => (
                        <div className="bahan" key={index}>
                            <input
                                type="text"
                                className="bahannya"
                                placeholder="Contoh: 2sdm Garam"
                                value={bahan}
                                onChange={(e) => handleBahanChange(index, e)}
                            />
                            <div className="img-container">
                                <img
                                    src={images('./tambahdetail.png')}
                                    alt="Tambah"
                                    className="action-button"
                                    onClick={addBahan}
                                    onKeyPress={handleBahanKeyPress}
                                />
                                <img
                                    src={images('./kurangdetail.png')}
                                    alt="Kurang"
                                    style={{ marginLeft: '10px' }}
                                    className={`action-button ${index === 0 ? 'disabled' : ''}`}
                                    onClick={() => index > 0 && removeBahan(index)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dropdowns */}
                <div className="dropdown">
                    <div className="banyaksaji">
                        <h3>Banyak Sajian</h3>
                        <div className="dropdown">
                            <a
                                className="btn btn-secondary dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {selectedPorsi}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" onClick={() => handlePorsiSelect('1 Porsi')}>1 Porsi</a></li>
                                <li><a className="dropdown-item" onClick={() => handlePorsiSelect('2 Porsi')}>2 Porsi</a></li>
                                <li><a className="dropdown-item" onClick={() => handlePorsiSelect('3 Porsi')}>3 Porsi</a></li>
                                <li><a className="dropdown-item" onClick={() => handlePorsiSelect('4 Porsi')}>4 Porsi</a></li>
                                <li><a className="dropdown-item" onClick={() => handlePorsiSelect('5 Porsi')}>5 Porsi</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="waktu">
                        <h3>Waktu Memasak</h3>
                        <div className="dropdown">
                            <a
                                className="btn btn-secondary dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuButton2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {selectedWaktu}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <li><a className="dropdown-item" onClick={() => handleWaktuSelect('10 Menit')}>10 Menit</a></li>
                                <li><a className="dropdown-item" onClick={() => handleWaktuSelect('15 Menit')}>15 Menit</a></li>
                                <li><a className="dropdown-item" onClick={() => handleWaktuSelect('30 Menit')}>30 Menit</a></li>
                                <li><a className="dropdown-item" onClick={() => handleWaktuSelect('1 Jam')}>1 Jam</a></li>
                                <li><a className="dropdown-item" onClick={() => handleWaktuSelect('1 Jam 30 Menit')}>1 Jam 30 Menit</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="kategori">
                        <h3>Kategori</h3>
                        <div className="dropdown">
                            <a
                                className="btn btn-secondary dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuButton3"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {selectedKategori}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                <li><a className="dropdown-item" onClick={() => handleKategoriSelect('Camilan')}>Camilan</a></li>
                                <li><a className="dropdown-item" onClick={() => handleKategoriSelect('Takjil')}>Takjil</a></li>
                                <li><a className="dropdown-item" onClick={() => handleKategoriSelect('Dessert')}>Dessert</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Cara Memasak */}
                <div className="cara-memasak">
                    <h2>Cara Memasak</h2>
                    {caramasak.map((cara, index) => (
                        <div className="caranya" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: '20px 0' }} key={index}>
                            <label htmlFor={`fileUploadstep-${index}`} style={{ paddingBottom: '20px' }}>
                                <input
                                    type="file"
                                    id={`fileUploadstep-${index}`}
                                    className="file-input-step"
                                    accept="image/*"
                                    onChange={(e) => handleCaramasakImageChange(index, e)}
                                />
                                <img
                                    src={cara.image || images('./unggahdisini.png')}
                                    alt={`Step ${index + 1}`}
                                    className="cara-image"
                                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                                />
                            </label>
                            <input
                                type="text"
                                className="text-caranya"
                                placeholder="Langkah memasak"
                                style={{ border: '1px solid #FF2525', borderRadius: '5px', color: 'red', padding: '10px', flex: '1', margin: '20px' }}
                                value={cara.step}
                                onChange={(e) => handleCaramasakChange(index, e)}
                            />
                            <div className="img-container md-9">
                                <img
                                    src={images('./tambahdetail.png')}
                                    alt="Tambah"
                                    className="action-button"
                                    onClick={addCaramasak}
                                />
                                <img
                                    src={images('./kurangdetail.png')}
                                    alt="Kurang"
                                    style={{ marginLeft: '10px' }}
                                    className={`action-button ${index === 0 ? 'disabled' : ''}`}
                                    onClick={() => index > 0 && removeCaramasak(index)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tags */}
                <h2>Tag Kata Kunci</h2>
                <div className="tag-container">
                    <div className="tag-content">
                        <div className="tag-input">
                            <input
                                id="tagInput"
                                type="text"
                                placeholder="Tambahkan Kata Kunci Sesuai Resep Anda"
                                value={tagInput}
                                onChange={handleTagInputChange}
                                onKeyPress={handleTagInputKeyPress}
                            />
                        </div>
                        <div className='line'></div>
                        <div className="tag-list">
                            {tags.map((tag, index) => (
                                <span className="tag" key={index}>
                                    {tag}
                                    <span className="close" onClick={() => removeTag(index)}>X</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="buttonunggah">
                    <a href="#" className="tag-button">Tag Kata Kunci</a>
                    <button className="up-button" onClick={handleSubmit}>Unggah Resep</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailUploadResep;
