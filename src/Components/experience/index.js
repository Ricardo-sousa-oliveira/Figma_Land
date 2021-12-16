import React from 'react';
import { Container, Title, BoxExperience, Box, Btn, Img } from './styles';

function experience() {
  return (
    <section>
      <Container>
        <BoxExperience>
          <Box>
            <Title>OpenType features and Variable fonts</Title>
            <Btn>Try For Free</Btn>
          </Box>
          <div>
            <Img src="/img/img_experience.png" alt="ImgExperience" />
          </div>
        </BoxExperience>
      </Container>
    </section>
  );
}

export default experience;
