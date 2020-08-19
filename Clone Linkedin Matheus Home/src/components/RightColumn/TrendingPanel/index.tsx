import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Há vagas: confira as empresas que estão</span>
              <span className="subtext">há 22 h • 10.316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
            <span className="head">Há vagas: confira as empresas que estão</span>
              <span className="subtext">há 22 h • 10.316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
            <span className="head">Há vagas: confira as empresas que estão</span>
              <span className="subtext">há 22 h • 10.316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
            <span className="head">Há vagas: confira as empresas que estão</span>
              <span className="subtext">há 22 h • 10.316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
            <span className="head">Há vagas: confira as empresas que estão</span>
              <span className="subtext">há 22 h • 10.316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
            <span className="head">Há vagas: confira as empresas que estão</span>
              <span className="subtext">há 22 h • 10.316 leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
