import React from 'react';

import Panel from '../../Panel';

import { Container, HashtagIcon } from './styles';

const tags = ['Mobile Marketing', 'Cybersecurity Club', 'Business Brand','Software & Technology' ];

const HashtagPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Recentes</span>

        {tags.map((item) => (
          <span className="tag">
            <HashtagIcon />
            {item}
          </span>
        ))}
      </Panel>
    </Container>
  );
};

export default HashtagPanel;
