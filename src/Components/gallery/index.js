import React from 'react';
import { Container, Title, Text, Img, Boximg, Btn } from './styles';

function gallery() {
  return (
    <section>
      <Container>
        <div>
          <Title>Gallery</Title>
        </div>
        <div>
          <Text>
            We focus on ergonomics and meetingyou where you work. It´s only a
            keystroke away.
          </Text>
        </div>
        <Boximg>
          <div>
            <Img src="/img/img_drone.png" alt="ImgDrone" />
          </div>
          <div>
            <Img src="/img/img_headset.png" alt="ImgHeadset" />
          </div>
          <div>
            <Img src="/img/img_typing man.png" alt="ImgTyping" />
          </div>
          <div>
            <Img src="/img/img_notboock.png" alt="ImgDImgNotboockrone" />
          </div>
        </Boximg>
        <Btn type="button">See more</Btn>
      </Container>
    </section>
  );
}

export default gallery;
