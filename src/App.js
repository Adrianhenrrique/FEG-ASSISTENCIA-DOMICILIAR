import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ServicesPage from './pages/ServicesPage/servicesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/services' element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;