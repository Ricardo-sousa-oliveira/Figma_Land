import React from 'react';
import ImgMap from '../../img/img_map.png';
import ImgPhone from '../../img/img_phone-android.png';
import LogoTwitter from '../../img/logo_twitter.png';
import LogoFacebook from '../../img/logo_facebook.png';
import LogoLinkedin from '../../img/logo_linkedin.png';
import {
  Container,
  BoxFooter,
  Link,
  Title,
  BoxLink,
  BoxInformation,
  BoxSocial,
  Box,
  Text,
  Img,
} from './styles';

function footer() {
  return (
    <section>
      <Container>
        <BoxFooter>
          <BoxLink>
            <Title>Fingertipe</Title>
            <Link>Home</Link>
            <Link>Examples</Link>
            <Link>Pricing</Link>
            <Link>Updates</Link>
          </BoxLink>
          <BoxLink>
            <Title>Resources</Title>
            <Link>Home</Link>
            <Link>Examples</Link>
            <Link>Pricing</Link>
            <Link>Updates</Link>
          </BoxLink>
          <BoxLink>
            <Title>About</Title>
            <Link>Home</Link>
            <Link>Examples</Link>
            <Link>Pricing</Link>
            <Link>Updates</Link>
          </BoxLink>
          <Box>
            <BoxInformation>
              <Img src={ImgMap} alt="ImgMap" />
              <Text>7480 Mockingbird Hill undefined</Text>
            </BoxInformation>
            <BoxInformation>
              <Img src={ImgPhone} alt="ImgPhone" />
              <Text>(239) 555-0108</Text>
            </BoxInformation>
            <BoxSocial>
              <Img src={LogoTwitter} alt="LogoTwitter" />
              <Img src={LogoFacebook} alt="LogoFacebook" />
              <Img src={LogoLinkedin} alt="LogoLinkedin" />
            </BoxSocial>
          </Box>
        </BoxFooter>
      </Container>
    </section>
  );
}

export default footer;
