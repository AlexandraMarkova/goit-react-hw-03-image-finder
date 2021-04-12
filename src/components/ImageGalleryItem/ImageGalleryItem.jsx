import React from 'react';
import './ImageGalleryItem.modules.css';

const ImageGalleryItem = ({ hits, imageClick }) =>
  hits.map(hit => (
    <li key={hit.id} className="ImageGalleryItem">
      <img
        onClick={imageClick}
        src={hit.webformatURL}
        alt={hit.tags}
        data-source={hit.largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  ));
export default ImageGalleryItem;
