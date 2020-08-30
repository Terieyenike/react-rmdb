import React from 'react';
import { FiFilm, FiClock, FiCast } from 'react-icons/fi';
import { calcTime, convertMoney } from '../../helpers';
import PropTypes from 'prop-types';

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <>
      <div className='rmdb-movieinfobar'>
        <div className='rmdb-movieinfobar-content'>
          <div className='rmdb-movieinfobar-content-col'>
            <FiClock className='fa-time' name='clock-o' size='2x' />
            <span className='rmdb-movieinfobar-info'>
              Running time: {calcTime(time)}
            </span>
          </div>
          <div className='rmdb-movieinfobar-content-col'>
            <FiFilm className='fa-budget' name='money' size='2x' />
            <span className='rmdb-movieinfobar-info'>
              Budget: {convertMoney(budget)}
            </span>
          </div>
          <div className='rmdb-movieinfobar-content-col'>
            <FiCast className='fa-revenue' name='ticket' size='2x' />
            <span className='rmdb-movieinfobar-info'>
              Revenue: {convertMoney(revenue)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
