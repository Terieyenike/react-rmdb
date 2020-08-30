import React from 'react';
import { LoadMore, Text } from './LoadMoreBtn.style';

const LoadMoreBtn = ({ text, onClick }) => {
  return (
    <LoadMore onClick={onClick}>
      <Text>{text}</Text>
    </LoadMore>
  );
};

export default LoadMoreBtn;
