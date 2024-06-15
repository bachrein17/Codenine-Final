import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from './pages/homepage';
import LoginForm from './pages/login';
import Signup from './pages/signup';
import Forum from './pages/forum';
import UploadResep from './pages/uploadresep';
import UploadDetail from './pages/uploaddetail';
import Favorit from './pages/favorit';
import SuccessPage from './pages/sukses';
import Resep from './pages/resep';
import Artikel from './pages/artikel';
import DetailArtikel from './pages/detailartikel';
import UserProfile from './pages/profil';
import DetailResep from './pages/detailresep';
import PopupFilter from './components/popupfilter';
import CuacaPanas from './pages/cuacapanas';
import CuacaDingin from './pages/cuacadingin';
import NotificationPage from './pages/notifikasi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/uploadresep' element={<UploadResep />} />
        <Route path='/uploaddetail' element={<UploadDetail />} />
        <Route path='/favorit' element={<Favorit />} />
        <Route path='/sukses' element={<SuccessPage />} />
        <Route path='/resep' element={<Resep />} />
        <Route path='/artikel' element={<Artikel />} />
        <Route path='/detailartikel' element={<DetailArtikel />} />
        <Route path='/profil' element={<UserProfile />} />
        <Route path='/detailresep' element={<DetailResep />} />
        <Route path='/cuacadingin' element={<CuacaDingin />} />
        <Route path='/cuacapanas' element={<CuacaPanas />} />
        <Route path='/popupfilter' element={<PopupFilter />} />
        <Route path='/notifikasi' element={<NotificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
