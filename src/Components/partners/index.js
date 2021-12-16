import React from 'react';
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
              <Img src="/img/logo_apple-app-store.png" alt="LogoAppleStore" />
            </div>
            <div>
              <Img src="/img/logo_apiary.png" alt="LogoApiary" />
            </div>
            <div>
              <Img src="/img/logo_android-icon.png" alt="LogoAndroid" />
            </div>
          </BoxLogo>
          <BoxLogo>
            <div>
              <Img src="/img/logo_basecamp.png" alt="LogoBasecamp" />
            </div>
            <div>
              <Img src="/img/logo_airbnb.png" alt="LogoAirbnb" />
            </div>
            <div>
              <Img src="/img/logo_ibm.png" alt="LogoIBM" />
            </div>
          </BoxLogo>
        </Box>
        <Btn type="button">All Partners</Btn>
      </Container>
    </section>
  );
}

export default partners;
