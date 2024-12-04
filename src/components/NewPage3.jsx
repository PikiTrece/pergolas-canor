import React from 'react';
import Navbar from './Navbar';         // Importa el Navbar
import MainSectionNewPage3 from './MainSectionNewPage3'; // Importa MainSection
import Footer from './Footer';         // Importa el Footer
import './NewPage3.css';               // Opcional: un CSS adicional para NewPage

const NewPage3 = () => {
  return (
    <div>
      <Navbar />                   {/* Muestra el Navbar en la parte superior */}
      <MainSectionNewPage3/>       {/* Contenido principal, reutilizando MainSection */}
      <Footer />                   {/* Muestra el Footer en la parte inferior */}
    </div>
  );
};

export default NewPage3;