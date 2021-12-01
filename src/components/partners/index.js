import React from 'react';
import LogoAppleStore from '../../img/logo_apple-app-store.png';
import LogoApiary from '../../img/logo_apiary.png';
import LogoAndroid from '../../img/logo_android-icon.png';
import LogoBasecamp from '../../img/logo_basecamp.png';
import LogoAirbnb from '../../img/logo_airbnb.png';
import LogoIBM from '../../img/logo_ibm.png';
import { Container, Title, Text, Img, Box, BoxLogo, Btn } from './styles';

function partners() {
  return (
    <section>
      <Container>
        <div>
          <Title>Partners</Title>
        </div>
        <div>
          <Text>
            We focus on ergonomics and meeting you where you work. It´s only a
            keystroke away.
          </Text>
        </div>
        <Box>
          <BoxLogo>
            <div>
              <Img src={LogoAppleStore} alt="LogoAppleStore" />
            </div>
            <div>
              <Img src={LogoApiary} alt="LogoApiary" />
            </div>
            <div>
              <Img src={LogoAndroid} alt="LogoAndroid" />
            </div>
          </BoxLogo>
          <BoxLogo>
            <div>
              <Img src={LogoBasecamp} alt="LogoBasecamp" />
            </div>
            <div>
              <Img src={LogoAirbnb} alt="LogoAirbnb" />
            </div>
            <div>
              <Img src={LogoIBM} alt="LogoIBM" />
            </div>
          </BoxLogo>
        </Box>
        <Btn type="button">All Partners</Btn>
      </Container>
    </section>
  );
}

export default partners;
