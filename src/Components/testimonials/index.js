import React from 'react';
import {
  Container,
  Title,
  Text,
  Box,
  BoxComments,
  Img,
  BoxProfile,
  TitleProfile,
} from './styles';

function testimonials() {
  return (
    <Container>
      <div>
        <Title>Testimonials</Title>
      </div>
      <div>
        <Box>
          <BoxComments>
            <BoxProfile>
              <div>
                <Img src="/img/coment_wade.png" alt="ComentWade" />
              </div>
              <div>
                <TitleProfile>Wade Steward</TitleProfile>
                <a type="link">Designer</a>
              </div>
            </BoxProfile>
            <div>
              <Text>
                Slate helps you see how many more days you need to work toreach
                your financial goal for themonth and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                forthe month and year.your financial goal for the month and
                year.
              </Text>
            </div>
          </BoxComments>
          <BoxComments>
            <BoxProfile>
              <div>
                <Img src="/img/coment_philip.png" alt="ComentPhilip" />
              </div>
              <div>
                <TitleProfile>Wade Steward</TitleProfile>
                <a type="link">Designer</a>
              </div>
            </BoxProfile>
            <div>
              <Text>
                Slate helps you see how many more days you need to work toreach
                your financial goal for themonth and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                forthe month and year.your financial goal for the month and
                year.
              </Text>
            </div>
          </BoxComments>
          <BoxComments>
            <BoxProfile>
              <div>
                <Img src="/img/coment_arthur.png" alt="ComentArthur" />
              </div>
              <div>
                <TitleProfile>Wade Steward</TitleProfile>
                <a type="link">Designer</a>
              </div>
            </BoxProfile>
            <div>
              <Text>
                Slate helps you see how many more days you need to work toreach
                your financial goal for themonth and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                forthe month and year.your financial goal for the month and
                year.
              </Text>
            </div>
          </BoxComments>
          <BoxComments>
            <BoxProfile>
              <div>
                <Img src="/img/coment_egina.png" alt="ComentEgina" />
              </div>
              <div>
                <TitleProfile>Wade Steward</TitleProfile>
                <a type="link">Designer</a>
              </div>
            </BoxProfile>
            <div>
              <Text>
                Slate helps you see how many more days you need to work toreach
                your financial goal for themonth and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                forthe month and year.your financial goal for the month and
                year.
              </Text>
            </div>
          </BoxComments>
        </Box>
      </div>
    </Container>
  );
}

export default testimonials;
