import React from 'react';
import Logo from '../../img/logo_dark.png';
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
              <LogoImage src={Logo} alt="Logo" />
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
