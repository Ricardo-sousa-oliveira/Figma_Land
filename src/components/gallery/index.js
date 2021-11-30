import React from 'react';
import { Container, Title, Text, Img, Boximg, Btn } from './styles';
import ImgDrone from '../../img/img_drone.png';
import ImgHeadset from '../../img/img_headset.png';
import ImgTyping from '../../img/img_typing man.png';
import ImgNotboock from '../../img/img_notboock.png';

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
            <Img src={ImgDrone} alt="ImgDrone" />
          </div>
          <div>
            <Img src={ImgHeadset} alt="ImgHeadset" />
          </div>
          <div>
            <Img src={ImgTyping} alt="ImgTyping" />
          </div>
          <div>
            <Img src={ImgNotboock} alt="ImgDImgNotboockrone" />
          </div>
        </Boximg>
        <Btn type="button">See more</Btn>
      </Container>
    </section>
  );
}

export default gallery;
