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

function header() {
  return (
    <>
      <section>
        <Container>
          <div className="row">
            <BoxNav>
              <BoxLogo>
                <LogoImage src={Logo} alt="Logo" />
              </BoxLogo>
              <BoxBtn>
                <BtnNav type="button">Login</BtnNav>
              </BoxBtn>
            </BoxNav>
          </div>
        </Container>
      </section>
    </>
  );
}

export default header;
