import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { search } from './Utils/SearchApi';

// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

function App() {
  const [hits, setHits] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  // const [searchImage, setsearchImage] = useState([]);

  const apiKey = '20350102-ed832d5aeaea3e1e1304ff4e5';

  useEffect(() => {
    if (searchQuery) {
      fetchHits();
    }
  }, [searchQuery]);

  const onChangeQuery = query => {
    // console.log(query);
    setSearchQuery(query);
  };

  const fetchHits = () => {
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        setHits(response.data.hits);
        setPage(page + 1);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  return (
    <Container>
      <Searchbar onSubmit={onChangeQuery} />
      <ImageGallery hits={hits} />
      <Button onClick={fetchHits} />
    </Container>
  );
}

export default App;
