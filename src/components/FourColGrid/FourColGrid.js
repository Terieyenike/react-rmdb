import React from 'react';
import {
  RmdbGrid,
  RmdbGridContent,
  RmdbGridElement,
} from './FourColGrid.style';

const FourColGrid = ({ header, loading, children }) => {
  const renderElements = children.map((elem, i) => {
    return <RmdbGridElement key={i}>{elem} </RmdbGridElement>;
  });
  return (
    <RmdbGrid>
      {header && !loading ? <h1>{header}</h1> : null}
      <RmdbGridContent>{renderElements}</RmdbGridContent>
    </RmdbGrid>
  );
};

export default FourColGrid;
