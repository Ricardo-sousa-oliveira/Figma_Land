import React from 'react';

import {
  Container,
  Title,
  Text,
  Box,
  Img,
  TextIformation,
  TitleInforation,
  IconFeatures,
  BoxTitleInforation,
} from './styles';

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
              <Img src="/img/img_features.png" alt="ImgFeatures" />
            </div>
            <div>
              <BoxTitleInforation>
                <IconFeatures
                  src="/img/icon_round-restaurant-menu.png"
                  alt="IconRestaurant"
                />
                <TitleInforation>A single source of truth</TitleInforation>
              </BoxTitleInforation>
              <TextIformation>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </TextIformation>
              <BoxTitleInforation>
                <IconFeatures
                  src="/img/icon_mdi_alien-outline.png"
                  alt="IconAlien"
                />
                <TitleInforation>Intuitive interface</TitleInforation>
              </BoxTitleInforation>
              <TextIformation>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </TextIformation>
              <BoxTitleInforation>
                <IconFeatures
                  src="/img/icon_mdi_all-inclusive.png"
                  alt="Iconinclusive"
                />
                <TitleInforation>Or with rules</TitleInforation>
              </BoxTitleInforation>
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
