import React, { useState } from 'react';
import axios from 'axios';
// import { search } from './Utils/SearchApi';

// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

function App() {
  const [hits, setHits] = useState([]);
  // const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);
  // const [searchImage, setsearchImage] = useState([]);

  const apiKey = '20350102-ed832d5aeaea3e1e1304ff4e5';

  const onSubmit = query => {
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => setHits(response.data.hits));
  };
  console.log(hits);

  return (
    <Container>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery hits={hits} />
    </Container>
  );
}

export default App;
