import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import UserProfile from '../components/userprofile';

const userProfil = () => {
    return (
        <div>
            <Navbar />
            <UserProfile/>
            <Footer />
        </div>
    );
}

export default userProfil;
