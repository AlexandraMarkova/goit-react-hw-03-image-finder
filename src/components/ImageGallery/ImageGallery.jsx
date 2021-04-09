import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.modules.css';

const ImageGallery = ({ hits }) => (
  <ul className="ImageGallery">
    {hits.map(hit => (
      <ImageGalleryItem
        key={hit.id}
        webformatURL={hit.webformatURL}
        largeImageURL={hit.largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;
