import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_200_200/0?e=1605744000&v=beta&t=BpGtXQcz3ypzxjuRdu-oKvOCZo5Jr3E4oNCl32qSEa0" alt="Apple" />
          <Column>
            <h3>Apple</h3>
            <h4>Produtos eletrônicos</h4>
            <time>15 min</time>
          </Column>
        </Row>

        <PostImage
          src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="Aechinia Blog"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle purple" />
          <span className="circle red" />
          <span className="circle yellow" />
          <span className="circle purples" />
          <span className="number">777</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
