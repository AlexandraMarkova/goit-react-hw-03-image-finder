import React from 'react';
import './Button.modules.css';

function Button({ onClick }) {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  );
}

export default Button;
