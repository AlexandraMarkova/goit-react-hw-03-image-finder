// import React from 'react';
import axios from 'axios';

const apiKey = '20350102-ed832d5aeaea3e1e1304ff4e5';

export const search = query => {
  axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};
