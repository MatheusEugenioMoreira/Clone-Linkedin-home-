import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQHuxF7l3uXxsA/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=T-FS1u-3kqtkwuRIBsTdB-ruPcF4HNpECBt5RXMdGyo" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
