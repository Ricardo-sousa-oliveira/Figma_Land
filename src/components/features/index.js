import React from 'react';
import ImgFeatures from '../../img/img_features.png';
import IconRestaurant from '../../img/icon_round-restaurant-menu.png';
import IconAlien from '../../img/icon_mdi_alien-outline.png';
import Iconinclusive from '../../img/icon_mdi_all-inclusive.png';

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
              <Img src={ImgFeatures} alt="ImgFeatures" />
            </div>
            <div>
              <BoxTitleInforation>
                <IconFeatures src={IconRestaurant} alt="IconRestaurant" />
                <TitleInforation>A single source of truth</TitleInforation>
              </BoxTitleInforation>
              <TextIformation>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </TextIformation>
              <BoxTitleInforation>
                <IconFeatures src={IconAlien} alt="IconAlien" />
                <TitleInforation>Intuitive interface</TitleInforation>
              </BoxTitleInforation>
              <TextIformation>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </TextIformation>
              <BoxTitleInforation>
                <IconFeatures src={Iconinclusive} alt="Iconinclusive" />
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
