import React from 'react';
import '../styles/login.css';

import loginawal from '../image/loginawal.png';
import googleIcon from '../image/google.png';
import facebookIcon from '../image/facebook.png';

// Import axios
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            rememberMeChecked: false
        };
    }

    // Method untuk menangani submit form
    handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
    
        try {
            const response = await axios.post('http://localhost:3001/api/users/login', data);
    
            if (response.status === 200) {
                // Login berhasil, arahkan pengguna ke halaman yang sesuai
                window.location.href = '/'; // Misalnya, arahkan ke dashboard atau halaman beranda
            } else {
                throw new Error(response.data.message || 'Login gagal.'); // Pesan default jika tidak ada response.message
            }
        } catch (error) {
            console.error('Error:', error);
            alert(`Login failed: ${error.message}`);
        }
    };
    
    togglePasswordVisibility = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    };

    handleRememberMeChange = () => {
        this.setState(prevState => ({
            rememberMeChecked: !prevState.rememberMeChecked
        }));
    };

    render() {
        return (
            <section className="halogin">
                <div className="imgbx">
                    {/* Menggunakan path gambar yang sudah diimpor */}
                    <img src={loginawal} alt="" />
                </div>
                <div className="contentbx">
                    <div className="formbx">
                        <h2>Login</h2>
                        <p>Selamat Datang Kembali! Silahkan Masuk Kembali</p>
                        <form onSubmit={this.handleSubmit}> {/* Tambahkan onSubmit di sini */}
                            <div className="inputbx">
                                <span>Username</span>
                                <input type="text" name="email" placeholder="Masukan Username atau Email" required /> {/* Tambahkan atribut name */}
                            </div>
                            <div className="inputbx">
                                <span>Password</span>
                                <input
                                    type={this.state.showPassword ? "text" : "password"}
                                    id="passwordInput"
                                    name="password"
                                    placeholder="Masukan Password"
                                    required
                                />
                                <span className="show-password" onClick={this.togglePasswordVisibility}>
                                    {this.state.showPassword ? "Hide" : "Show"}
                                </span>
                            </div>
                            <div className="remember-forgot">
                                <div className="remember">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        checked={this.state.rememberMeChecked}
                                        onChange={this.handleRememberMeChange}
                                        style={{
                                            borderColor: 'red',
                                            borderRadius: '5px',
                                            backgroundColor: this.state.rememberMeChecked ? 'red' : 'transparent'
                                        }}
                                    />
                                    <label htmlFor="remember">Ingat Saya!</label>
                                </div>
                                <div className="forgot-password">
                                    <a href="#">Lupa Password</a>
                                </div>
                            </div>
                            <div className="inputbx text-center" style={{ paddingTop: '20px' }}>
                                <button type="submit" className="btn btn-primary btn-custom">Login</button>
                            </div>
                        </form>
                        <ul className="sci">
                            <li>
                                <img src={googleIcon} alt="" />
                            </li>
                            <li>
                                <img src={facebookIcon} alt="" />
                            </li>
                        </ul>
                        <div className="inputbx" style={{ textAlign: 'center', paddingTop: '30px' }}>
                            <p>
                                Belum punya akun? <a href="/signup">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;
