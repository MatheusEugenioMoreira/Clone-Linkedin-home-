import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="panel-cover">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E16AQEh8Gg_LJADlQ/profile-displaybackgroundimage-shrink_200_800/0?e=1603324800&amp;v=beta&amp;t=kWPgRSZa_YrbJA7KVd0k1ejo1LenMvV8VeUv1RzXXpw"
          alt="panel"
          className="panel-cover"
        />
        
        </div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHuxF7l3uXxsA/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=T-FS1u-3kqtkwuRIBsTdB-ruPcF4HNpECBt5RXMdGyo"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Matheus Eugênio</h1>
        <h2>CEO at @ Aechinia</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">7.777</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">777</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
