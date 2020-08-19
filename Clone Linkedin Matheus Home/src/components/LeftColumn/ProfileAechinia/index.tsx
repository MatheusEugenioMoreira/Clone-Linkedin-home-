import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"
      
        />
        
        
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQERVFus9IZiSA/company-logo_100_100/0?e=1605744000&v=beta&t=btck7038UTAci1lyXWzIvUzAKk4kmP-dGJyCodMuNfY"
          alt="Avatar-Aechinia"
          className="Aechinia-picture"
        />
        <h1>Aechinia</h1>
        <div className="separators"></div>

        <div className="key-value">
          <span className="key">Notificações da Pagina</span>
          <span className="value">7.777</span>
        </div>
        <div className="key-value">
          <span className="key">Visitantes na Pagina</span>
          <span className="value">777</span>
        </div>
        <div className="separator"></div>
        <div className="key-value">
          <span className="keys">Visualizar análise de visitantes</span>
          
        </div>
        

        
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
