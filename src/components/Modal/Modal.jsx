import React, { useEffect } from 'react';
import './Modal.modules.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, toggleModal }) => {
  const handleKeydown = e => {
    // console.log('нажали ESC');
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  useEffect(() => {
    // console.log('addEventListener');
    window.addEventListener('keydown', handleKeydown);
  }, []);

  useEffect(() => {
    // console.log('removeEventListener');
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot,
  );
};
export default Modal;
