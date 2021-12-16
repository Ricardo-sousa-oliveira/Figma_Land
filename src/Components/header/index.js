import React from 'react';
import {
  Container,
  Title,
  Text,
  BtnTryForFree,
  BtnLearnMore,
  BoxBtn,
  Img,
} from './styles';

function header() {
  return (
    <section>
      <Container>
        <div>
          <Title>Work at the speed of thhought.</Title>
        </div>
        <div>
          <Text>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </Text>
        </div>
        <BoxBtn>
          <BtnTryForFree>Try For Free</BtnTryForFree>
          <BtnLearnMore>Learn More</BtnLearnMore>
        </BoxBtn>
        <div>
          <Img src="/img/img_header.png" alt="ImgHeader" />
        </div>
      </Container>
    </section>
  );
}

export default header;
