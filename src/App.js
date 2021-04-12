import React, { useState, useEffect } from 'react';
import { fetchImages } from './Utils/SearchApi';
import Loader from 'react-loader-spinner';

// import PropTypes from 'prop-types';

import Container from './components/Container/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

function App() {
  const [searchHits, setSearchHits] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const [searchImage, setsearchImage] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      fetchHits();
    }
  }, [searchQuery]);

  const onChangeQuery = query => {
    // console.log(query);
    setSearchQuery(query);
    setSearchHits([]);
    setPage(1);
    setError(null);
  };

  const fetchHits = () => {
    const options = {
      searchQuery,
      page,
    };

    setIsLoading(true);

    fetchImages(options)
      .then(({ hits }) => {
        setSearchHits([...searchHits, ...hits]);
        setPage(page + 1);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  const spinnerStyle = {
    marginRight: 'auto',
    marginLeft: 'auto',
  };

  return (
    <Container>
      {error && <h1>Попробуйте позже</h1>}
      <Searchbar onSubmit={onChangeQuery} />
      <ImageGallery hits={searchHits} />
      {isLoading && (
        <Loader
          type="Rings"
          color="#00BFFF"
          height={120}
          width={120}
          style={spinnerStyle}
        />
      )}
      {searchHits.length > 0 && !isLoading && <Button onClick={fetchHits} />}
    </Container>
  );
}

export default App;
