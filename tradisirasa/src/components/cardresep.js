import React from 'react';
import './cardresep.css';

const CardResep = ({ image, porsi, waktu, title, publisher, onDelete }) => {
    const images = require.context('../image', true);

    return (
        <div className="card-resep" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '35px 0' }}>
            <div className="card" style={{ borderRadius: '25px', borderColor: 'white', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', margin: '35px', position: 'relative', width: '85%', maxWidth: '400px' }}>
                <div className="image-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px' }}>
                    <img src={images(image)} alt="" style={{ borderRadius: '25px', maxWidth: '100%', maxHeight: '300px' }} />
                    <div className="delete-icon" onClick={onDelete} style={{ position: 'absolute', top: '15px', right: '15px', width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', background: 'linear-gradient(50deg, #FF2525, #FF2525, #FFA800)' }}>
                            <img src={images('./sebelumfavicon.png')} alt="Delete" style={{ width: '26px', height: '26px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                        </div>
                    </div>

                </div>
                <div className="card-body" style={{ padding: '15px' }}>
                    <div className="tagf" style={{ display: 'flex' }}>
                        <span className="border-customf" style={{ fontWeight: '600', fontStyle: 'normal', fontSize: '12px', color: 'red', padding: '5px 5px', borderRadius: '15px' }}>
                            <img src={images('./porsi.png')} alt="" style={{ width: '17px', height: '15px', marginRight: '10px' }} />{porsi}
                        </span>
                        <span className="border-customf" style={{ fontWeight: '600', fontStyle: 'normal', fontSize: '12px', color: 'red', padding: '5px 15px', borderRadius: '15px' }}>
                            <img src={images('./waktu.png')} alt="" style={{ width: '17px', height: '17px', marginRight: '10px' }} />{waktu}
                        </span>
                    </div>
                    <p className="card-text" style={{ paddingTop: '7px', fontWeight: '600', fontStyle: 'normal', fontSize: '14px', color: 'red' }}>{title}</p>
                    <p className="card-deskripsi" style={{ fontWeight: '400', fontStyle: 'normal', fontSize: '12px', color: 'red' }}>Publisher: {publisher}</p>
                </div>
            </div>
        </div>
    );
};

export default CardResep;
