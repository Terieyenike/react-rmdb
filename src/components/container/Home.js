import React from 'react';
import { RmdbHome, RmdbGrid } from './Home.style';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
} from '../../config';
// components
import HeroImage from '../HeroImage/HeroImage';
import SearchBar from '../SearchBar/SearchBar';
import FourColGrid from '../FourColGrid/FourColGrid';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../MovieThumb/MovieThumb';
import Spinner from '../Spinner/Spinner';

class Home extends React.Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: '',
  };

  componentDidMount() {
    if (sessionStorage.getItem('HomeState')) {
      let state = JSON.parse(sessionStorage.getItem('HomeState'));
      this.setState({ ...state });
    } else {
      this.setState({
        loading: true,
      });
      const url = `https://fierce-meadow-73752.herokuapp.com/${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      this.fetchItems(url);
    }
  }

  fetchItems = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    this.setState(
      {
        movies: [...this.state.movies, ...data.results],
        heroImage: this.state.heroImage || data.results[0],
        loading: false,
        currentPage: data.page,
        totalPages: data.total_pages,
      },
      () => {
        if (this.state.searchTerm === '') {
          sessionStorage.setItem('HomeState', JSON.stringify(this.state));
        }
      }
    );
  };

  loadMoreItems = () => {
    let url = '';
    this.setState({
      loading: true,
    });
    if (this.state.searchTerm === '') {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
        this.state.currentPage + 1
      }`;
    } else {
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${
        this.state.searchTerm
      }&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(url);
  };

  searchItems = (searchTerm) => {
    console.log(searchTerm);
    let url = '';
    this.setState({
      movies: [],
      loading: true,
      searchTerm,
    });
    if (searchTerm === '') {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(url);
  };

  render() {
    return (
      <>
        <RmdbHome>
          {this.state.heroImage ? (
            <div>
              <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
                title={this.state.heroImage.original_title}
                text={this.state.heroImage.overview}
              />
              <SearchBar callback={this.searchItems} />
            </div>
          ) : null}
          <RmdbGrid>
            <FourColGrid
              header={
                this.state.searchTerm ? 'Search Result' : 'Popular Movies'
              }
              loading={this.state.loading}>
              {this.state.movies.map((movie, i) => {
                return (
                  <MovieThumb
                    key={i}
                    clickable={true}
                    image={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : '../../assets/no_image.jpg'
                    }
                    movieId={movie.id}
                    movieName={movie.original_title}
                  />
                );
              })}
            </FourColGrid>
            {this.state.loading ? <Spinner /> : null}
            {this.state.currentPage <= this.state.totalPages &&
            !this.state.loading ? (
              <LoadMoreBtn text='Load More' onClick={this.loadMoreItems} />
            ) : null}
          </RmdbGrid>
        </RmdbHome>
      </>
    );
  }
}

export default Home;
