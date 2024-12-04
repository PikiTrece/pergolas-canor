import React from 'react';
import Navbar from './Navbar';         // Importa el Navbar
import MainSectionNewPage2 from './MainSectionNewPage2'; // Importa MainSection
import Footer from './Footer';         // Importa el Footer
import './NewPage2.css';               // Opcional: un CSS adicional para NewPage

const NewPage2 = () => {
  return (
    <div>
      <Navbar />                   {/* Muestra el Navbar en la parte superior */}
      <MainSectionNewPage2/>       {/* Contenido principal, reutilizando MainSection */}
      <Footer />                   {/* Muestra el Footer en la parte inferior */}
    </div>
  );
};

export default NewPage2;