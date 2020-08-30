import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { RmdbSearch, RmdbSearchContent, RmdbInput } from './SearchBar.style';

class SearchBar extends React.Component {
  state = {
    query: '',
  };
  timeout = null;

  handleSearch = (e) => {
    this.setState({ query: e.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.query);
    }, 500);
  };
  render() {
    return (
      <RmdbSearch>
        <RmdbSearchContent>
          <FiSearch
            style={{
              position: 'absolute',
              left: '1.25em',
              top: '20px',
              color: '#fff',
              fontSize: '1.5rem',
            }}
          />
          <RmdbInput
            type='text'
            placeholder='Search'
            onChange={this.handleSearch}
            value={this.state.query}
          />
        </RmdbSearchContent>
      </RmdbSearch>
    );
  }
}

export default SearchBar;
