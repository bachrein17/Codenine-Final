import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ForumCardPage from '../components/forumcardpage';
import ForumCardTanpaGambar from '../components/forumcardtanpagambar';

const images = require.context('../image', true);

const Forum = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [discussionText, setDiscussionText] = useState('');
    const [isSearchMode, setIsSearchMode] = useState(false);
    const [isDiscussionMode, setIsDiscussionMode] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [tags, setTags] = useState(['Tag1', 'Tag2', 'Tag3']);
    const [forums, setForums] = useState([
        {
            id: 1,
            type: 'image',
            title: 'Tiap tahun saya selalu buat nastar, tapi kok nastar saya selalu keras kayak batu ya?',
            tags: ['Nastar', 'Tips', 'Kue Kering', 'Makanan Hari Raya'],
            uploadedTime: '2 Jam',
            profileImage: images('./profilakun1.png'),
            profileName: 'John Doe',
            profileRole: 'Developer',
            likeCount: 'likeCount1',
            viewCount: 'viewCount1',
            commentCount: 'commentCount1',
            image: images('./forum-1.png'),
        },
        {
            id: 2,
            type: 'image',
            title: 'Alhamdulillah, kemarin saya nyoba2 buat catering menu buka puasa, eh banyak yang order, senangnyaa...',
            tags: ['Menu Makanan Malam', 'Rendang', 'Nasi Goreng', 'Catering'],
            uploadedTime: '2 Jam',
            profileImage: images('./profilakun1.png'),
            profileName: 'John Doe',
            profileRole: 'Developer',
            likeCount: 'likeCount2',
            viewCount: 'viewCount1',
            commentCount: 'commentCount1',
            image: images('./forum-1.png'),
        },
        {
            id: 3,
            type: 'text',
            title: 'Judul Forum',
            tags: ['Tag1', 'Tag2', 'Tag3'],
            uploadedTime: '2 jam yang lalu',
            profileImage: images('./forum-1.png'),
            profileName: 'Nama Profil',
            profileRole: 'Peran Profil',
            likeCount: 'likeCount3',
            viewCount: 'viewCount3',
            commentCount: 'commentCount3',
        },
        {
            id: 4,
            type: 'text',
            title: 'Judul Forum',
            tags: ['Tag1', 'Tag2', 'Tag3'],
            uploadedTime: '2 jam yang lalu',
            profileImage: images('./forum-1.png'),
            profileName: 'Nama Profil',
            profileRole: 'Peran Profil',
            likeCount: 'likeCount4',
            viewCount: 'viewCount4',
            commentCount: 'commentCount4',
        },
    ]);
    const [filteredForums, setFilteredForums] = useState(forums);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleDiscussionChange = (e) => {
        setDiscussionText(e.target.value);
    };

    const handleFileAttach = (e) => {
        console.log(e.target.files);
    };

    const handleSearchModeToggle = () => {
        setIsSearchMode(!isSearchMode);
        setIsDiscussionMode(false);
        setSearchText('');
        setFilteredForums(forums);
    };

    const handleDiscussionModeToggle = () => {
        setIsDiscussionMode(!isDiscussionMode);
        setIsSearchMode(false);
        setSearchText('');
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearchKeyPress = (e) => {
        if (e.key === 'Enter') {
            const searchQuery = searchText.toLowerCase();
            const filtered = forums.filter(forum =>
                forum.title.toLowerCase().includes(searchQuery) ||
                forum.tags.some(tag => tag.toLowerCase().includes(searchQuery))
            );
            setFilteredForums(filtered);
        }
    };

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
            <div className="container mt-5 py-2">
                <header className="container-fluid banner">
                    <div className="row align-items-center">
                        <h1 className="Text-Judul" style={{ textAlign: 'center', fontWeight: '600', wordWrap: 'break-word' }}>Forum Diskusi</h1>
                        <p className="p-Judul m-0 px-3 py-2" style={{ textAlign: 'center' }}>Berbagi Pengetahuan, Inspirasi, dan Kreativitas Kuliner!</p>
                    </div>
                </header>
            </div>

            <section>
                <div className="search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60%', margin: '0 auto', border: '3px solid #ccc', borderRadius: '10px', padding: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', width: isSearchMode || isDiscussionMode ? '20%' : '80%', transition: 'width 0.3s' }}>
                        {isDiscussionMode ? (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input type="text" style={{ border: 'none', outline: 'none', width: '100%' }} placeholder="Mulai Diskusimu!!" onClick={handleOpenPopup} />
                                <i className="las la-paper-plane" onClick={handleOpenPopup} style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                            </div>
                        ) : (
                            <input type="text" style={{ border: 'none', outline: 'none', width: '100%', display: isSearchMode ? 'none' : 'block' }} placeholder="Mulai Diskusimu!!" onClick={handleOpenPopup} />
                        )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: isSearchMode || isDiscussionMode ? '80%' : '20%', transition: 'width 0.3s' }}>
                        <input type="text" style={{ border: 'none', outline: 'none', width: '100%', display: isSearchMode ? 'block' : 'none' }} placeholder="Search..." value={searchText} onChange={handleSearchChange} onKeyPress={handleSearchKeyPress} />
                    </div>
                    <img src={images('./diskusi.png')} alt="discussion" onClick={handleDiscussionModeToggle} style={{ cursor: 'pointer', marginRight: '10px' }} />
                    <img src={images('./search.png')} alt="search" onClick={handleSearchModeToggle} style={{ cursor: 'pointer', marginRight: '10px', height: '20px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '50%', margin: '10px auto' }}>
                    {tags.map((tag, index) => (
                        <span key={index} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px 10px', margin: '5px' }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </section>



            <section className="forum" id="forum">
                <div className="container">
                    <div className="row">
                        {filteredForums.map(forum => (
                            <div className="col-lg-6" key={forum.id}>
                                {forum.type === 'image' ? (
                                    <ForumCardPage
                                        image={forum.image}
                                        title={forum.title}
                                        tags={forum.tags}
                                        uploadedTime={forum.uploadedTime}
                                        profileImage={forum.profileImage}
                                        profileName={forum.profileName}
                                        profileRole={forum.profileRole}
                                        likeCount={forum.likeCount}
                                        viewCount={forum.viewCount}
                                        commentCount={forum.commentCount}
                                    />
                                ) : (
                                    <ForumCardTanpaGambar
                                        title={forum.title}
                                        tags={forum.tags}
                                        uploadedTime={forum.uploadedTime}
                                        profileImage={forum.profileImage}
                                        profileName={forum.profileName}
                                        profileRole={forum.profileRole}
                                        likeCount={forum.likeCount}
                                        viewCount={forum.viewCount}
                                        commentCount={forum.commentCount}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            {isPopupOpen && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', maxWidth: '500px', padding: '20px', border: '3px solid #ccc', borderRadius: '10px', backgroundColor: 'white', zIndex: 1000 }}>
                    <h3>Mulai Diskusi</h3>
                    <textarea style={{ width: '100%', height: '100px', marginBottom: '10px' }} value={discussionText} onChange={handleDiscussionChange}></textarea>
                    <input type="file" onChange={handleFileAttach} />
                    <div style={{ marginTop: '10px', textAlign: 'right' }}>
                        <button onClick={handleClosePopup} style={{ marginRight: '10px' }}>Cancel</button>
                        <button>Submit</button>
                    </div>
                </div>
            )}
            {isPopupOpen && <div onClick={handleClosePopup} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}></div>}
        </div>
    );
};

export default Forum;
