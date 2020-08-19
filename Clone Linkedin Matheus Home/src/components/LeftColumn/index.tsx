import React from 'react';

import LoadingProfilePanel from '../Shimmer/LoadingProfilePanel';
import ProfilePanel from './ProfilePanel';
import Aechinia from './ProfileAechinia';
import HashtagPanel from './HashtagPanel';
import HashtagPanels from './HashtagPanels';

import { Container } from './styles';

const LeftColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
        <>
          <ProfilePanel />
          <Aechinia />
          <HashtagPanels />
          <HashtagPanel />
          
          
        </>
      )}
    </Container>
  );
};

export default LeftColumn;
