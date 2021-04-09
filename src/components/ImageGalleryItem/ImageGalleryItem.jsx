import React from 'react';
import './ImageGalleryItem.modules.css';

const ImageGalleryItem = ({ key, webformatURL, largeImageURL }) => (
  <li key={key} className="ImageGalleryItem">
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);
export default ImageGalleryItem;
