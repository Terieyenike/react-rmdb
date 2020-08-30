import React from 'react';
import { Link } from 'react-router-dom';
import { RmdbHeader, HeaderContent, RmdbLogo, TmdbLogo } from './Header.style';
import Logo from '../../assets/reactMovie_logo.png';
import rmdb from '../../assets/tmdb_logo.png';

const Header = () => {
  return (
    <RmdbHeader>
      <HeaderContent>
        <Link to='/'>
          <RmdbLogo src={Logo} alt='rmdb-logo' />
        </Link>
        <TmdbLogo src={rmdb} alt='rmdb-tmdb-logo' />
      </HeaderContent>
    </RmdbHeader>
  );
};

export default Header;
