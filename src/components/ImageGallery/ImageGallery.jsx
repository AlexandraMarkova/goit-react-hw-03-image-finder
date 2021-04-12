import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.modules.css';

const ImageGallery = ({ hits, imageClick }) => (
  <ul className="ImageGallery">
    <ImageGalleryItem hits={hits} imageClick={imageClick} />
  </ul>
);

export default ImageGallery;
