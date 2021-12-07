import React from 'react';
import { Container, Title, BoxExperience, Box, Btn, Img } from './styles';
import ImgExperience from '../../img/img_experience.png';

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
            <Img src={ImgExperience} alt="ImgExperience" />
          </div>
        </BoxExperience>
      </Container>
    </section>
  );
}

export default experience;
