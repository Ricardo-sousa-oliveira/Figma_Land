import React from 'react';
import {
  LogoImage,
  Container,
  BoxNav,
  BoxLogo,
  BoxBtn,
  BtnNav,
} from './styles';

function nav() {
  return (
    <>
      <section>
        <Container>
          <BoxNav>
            <BoxLogo>
              <LogoImage src="/img/logo_dark.png" alt="Logo" />
            </BoxLogo>
            <BoxBtn>
              <BtnNav type="button">Login</BtnNav>
            </BoxBtn>
          </BoxNav>
        </Container>
      </section>
    </>
  );
}

export default nav;
