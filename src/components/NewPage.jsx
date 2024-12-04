import React from 'react';
import Navbar from './Navbar';         // Importa el Navbar
import MainSectionNewPage from './MainSectionNewPage'; // Importa MainSection
import Footer from './Footer';         // Importa el Footer
import './NewPage.css';               // Opcional: un CSS adicional para NewPage

const NewPage = () => {
  return (
    <div>
      <Navbar />                   {/* Muestra el Navbar en la parte superior */}
      <MainSectionNewPage />       {/* Contenido principal, reutilizando MainSection */}
      <Footer />                   {/* Muestra el Footer en la parte inferior */}
    </div>
  );
};

export default NewPage;