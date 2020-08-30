import React from 'react';
import { Link } from 'react-router-dom';
import { RmdbMovieThumb } from './MovieThumb.style';

const MovieThumb = ({ image, movieId, movieName, clickable }) => {
  return (
    <RmdbMovieThumb>
      {clickable ? (
        <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
          <img className='clickable' src={image} alt='moviethumb' />
        </Link>
      ) : (
        <img src={image} alt='moviethumb' />
      )}
    </RmdbMovieThumb>
  );
};

export default MovieThumb;
