import React from 'react';
import Logo from '../../img/logo_dark.png';
import { LogoImage, Container, BoxNav, BoxLogo, BoxBtn } from './styles';

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
                <button type="button">Login</button>
              </BoxBtn>
            </BoxNav>
          </div>
        </Container>
      </section>
    </>
  );
}

export default header;
