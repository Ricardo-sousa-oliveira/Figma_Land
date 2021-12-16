import React from 'react';
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
              <Img src="/img/img_map.png" alt="ImgMap" />
              <Text>7480 Mockingbird Hill undefined</Text>
            </BoxInformation>
            <BoxInformation>
              <Img src="/img/img_phone-android.png" alt="ImgPhone" />
              <Text>(239) 555-0108</Text>
            </BoxInformation>
            <BoxSocial>
              <Img src="/img/logo_twitter.png" alt="LogoTwitter" />
              <Img src="/img/logo_facebook.png" alt="LogoFacebook" />
              <Img src="/img/logo_linkedin.png" alt="LogoLinkedin" />
            </BoxSocial>
          </Box>
        </BoxFooter>
      </Container>
    </section>
  );
}

export default footer;
