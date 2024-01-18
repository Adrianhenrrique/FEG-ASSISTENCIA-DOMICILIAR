import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/HomePage/HomePage';
import ContatoPage from './pages/ContatoPage/ContatoPage';
import ServicesPage from './pages/ServicesPage/servicesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import logo from './favicon.ico';
import logoInstagram from './Img/instagram.png'
import logoWhatsapp from './Img/whatsapp.png'
import Footer from './components/footer/Footer';
import FloatWhatsapp from './components/Float/whatsapp/FloatWhatsapp';

function App() {
  return (
    <BrowserRouter>
      <Header logo={logo}/>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contato' element={<ContatoPage />} />
      </Routes>
      
      <Footer logo={logoInstagram}/>
      <FloatWhatsapp logo={logoWhatsapp}/>
    </BrowserRouter>
  );
}

export default App;