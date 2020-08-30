import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import { FiCamera } from 'react-icons/fi';
import MovieThumb from '../MovieThumb/MovieThumb';
import PropTypes from 'prop-types';
import {
  RmdbMovieInfo,
  RmdbMovieInfoContent,
  RmdbMovieInfoThumb,
  RmdbMovieInfoText,
  RmdbRating,
  RmdbScore,
  RmdbDirector,
} from './MovieInfo.style';

const MovieInfo = ({ movie, directors }) => {
  return (
    <>
      <RmdbMovieInfo
        style={{
          background: movie.backdrop_path
            ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
            : '#000',
        }}>
        <RmdbMovieInfoContent>
          <RmdbMovieInfoThumb>
            <MovieThumb
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : '../../assets/no_image.jpg'
              }
              clickable={false}
            />
          </RmdbMovieInfoThumb>
          <RmdbMovieInfoText>
            <h1>{movie.title}</h1>
            <h3>PLOT</h3>
            <p>{movie.overview}</p>
            <h3>IMDB RATING</h3>
            <RmdbRating>
              <meter
                min='0'
                max='100'
                optimum='100'
                low='40'
                high='70'
                value={movie.vote_average * 10}></meter>
              <RmdbScore>{movie.vote_average}</RmdbScore>
            </RmdbRating>
            {directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
            {directors.map((element, i) => {
              return <RmdbDirector key={i}>{element.name}</RmdbDirector>;
            })}
          </RmdbMovieInfoText>
          <FiCamera />
        </RmdbMovieInfoContent>
      </RmdbMovieInfo>
    </>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
};

export default MovieInfo;
