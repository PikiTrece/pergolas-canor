
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import NewPage from './components/NewPage'; // Importa la nueva página
import MainSectionNewPage from './components/MainSectionNewPage'; // Asegúrate de la ruta
import NewPage2 from './components/NewPage2'; // Importa la nueva página
import MainSectionNewPage2 from './components/MainSectionNewPage2'; // Asegúrate de la ruta
import NewPage3 from './components/NewPage3'; // Importa la nueva página
import MainSectionNewPage3 from './components/MainSectionNewPage3'; // Asegúrate de la ruta

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainSection />} /> {/* Usa MainSection en la ruta principal */}
          <Route path="/main-section-new-page" element={<MainSectionNewPage />} />
          <Route path="/newpage" element={<NewPage />} /> {/* Nueva ruta */}
          <Route path="/main-section-new-page-2" element={<MainSectionNewPage2 />} />
          <Route path="/newpage2" element={<NewPage2 />} /> {/* Nueva ruta */}
          <Route path="/main-section-new-page-3" element={<MainSectionNewPage3 />} />
          <Route path="/newpage3" element={<NewPage3 />} /> {/* Nueva ruta */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
