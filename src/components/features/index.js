import React from 'react';
import ImgFeatures from '../../img/img_features.png';
import { Container, Title, Text, Box, Img, TextIformation } from './styles';

function features() {
  return (
    <>
      <section>
        <Container>
          <div>
            <Title>FEATURES</Title>
          </div>
          <div>
            <Text>
              Most calendars are designed for teams.Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </Text>
          </div>
          <Box>
            <div>
              <Img src={ImgFeatures} alt="ImgFeatures" />
            </div>
            <div>
              <TextIformation>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </TextIformation>
              <TextIformation>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </TextIformation>
              <TextIformation>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </TextIformation>
            </div>
          </Box>
        </Container>
      </section>
    </>
  );
}

export default features;
