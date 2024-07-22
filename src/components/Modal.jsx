import React, { useState, useEffect } from 'react';
import banner_movil from "../assets/banner_movil_publicidad.webp"
const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

 
/*----------------------- funcion para cerrar el modal-------------------------- */
  
  const cerraModal = () => {
    setIsOpen(false);
  };

  /*------------------------ Funcion para obtener la clase css del overlay---------------------------- */

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        cerraModal();
    }
  };

  /* --------------------Renderiza el overlay para eliminar el banner de movil------------------------- */

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={cerraModal}>
            ×
          </button>
           <img loading='lazy' src={banner_movil} alt="banner-movil"/>
        </div>
      </div>
    )
  );
};

export default Modal;
