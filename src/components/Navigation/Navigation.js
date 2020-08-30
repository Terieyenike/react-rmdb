import React from 'react';
import { Link } from 'react-router-dom';
import {
  RmdbNavigation,
  RmdbNavigationContent,
  Paragraph,
} from './Navigation.style';
import PropTypes from 'prop-types';

const Navigation = ({ movie }) => {
  return (
    <>
      <RmdbNavigation>
        <RmdbNavigationContent>
          <Link to='/'>
            <Paragraph>Home</Paragraph>
          </Link>

          <Paragraph>/</Paragraph>
          <Paragraph>{movie}</Paragraph>
        </RmdbNavigationContent>
      </RmdbNavigation>
    </>
  );
};

Navigation.propTypes = {
  movie: PropTypes.string,
};

export default Navigation;
