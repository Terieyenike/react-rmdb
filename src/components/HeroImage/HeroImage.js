import React from 'react';
import {
  RmdbImage,
  RmdbContent,
  RmdbText,
  RmdbHeading,
  RmdbPg,
} from './HeroImage.style';

const HeroImage = ({ image, title, text }) => {
  return (
    <RmdbImage
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, .65) 100%),url('${image}'), #1c1c1c`,
      }}>
      <RmdbContent>
        <RmdbText>
          <RmdbHeading>{title}</RmdbHeading>
          <RmdbPg>{text.substring(0, 120) + '...'}</RmdbPg>
        </RmdbText>
      </RmdbContent>
    </RmdbImage>
  );
};

export default HeroImage;
