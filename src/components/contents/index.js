import React from 'react';
import ImgMacbock from '../../img/img_macbook_pro.png';
import ImgBoards from '../../img/img_boards_notifications.png';

import {
  Container,
  Title,
  Text,
  BoxCard,
  Card,
  TitleCard,
  TextCard,
  BtnCard,
  ImgCard,
} from './styles';

function content() {
  return (
    <>
      <section>
        <Container>
          <div>
            <Title>Contents</Title>
          </div>
          <div>
            <Text>
              We focus on ergonomics and meeting you where you work. It´s only a
              keystroke away.
            </Text>
          </div>
          <BoxCard>
            <Card>
              <TitleCard>Work</TitleCard>
              <TextCard>
                Ever wondered if you´re too reliant on a client for work? Slate
                helps you identify .
              </TextCard>
              <BtnCard>Sign Up</BtnCard>
              <ImgCard src={ImgMacbock} alt="ImgMacbock" />
            </Card>
            <Card>
              <TitleCard>Work</TitleCard>
              <TextCard>
                Ever wondered if you´re too reliant on a client for work? Slate
                helps you identify .
              </TextCard>
              <BtnCard>Try For Free</BtnCard>
              <ImgCard src={ImgBoards} alt="ImgBoards" />
            </Card>
          </BoxCard>
        </Container>
      </section>
    </>
  );
}

export default content;
