import styled from 'styled-components';
import { device } from '../../tokens/screen';
import { colors, fontFamilies, fontSizes } from '../../tokens';

export const Container = styled.div`
  align-items: center;
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  font-family: ${fontFamilies.primary};
  justify-content: center;
`;

export const Title = styled.h2`
  color: ${colors.white};
  font-size: ${fontSizes.xxlarge};
  margin-bottom: 30px;
  text-align: center;
  width: 290px;

  @media ${device.mobileM} {
    width: 180px;
  }

  @media ${device.mobileM} {
    width: 250px;
  }

  @media ${device.tablet} {
    width: 500px;
  }
`;

export const Text = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.medium}px;
  line-height: 25px;
  margin-bottom: 30px;
  text-align: center;
  width: 290px;

  @media ${device.mobileS} {
    width: 200px;
  }

  @media ${device.mobileM} {
    width: 350px;
  }

  @media ${device.tablet} {
    margin-bottom: 60px;
    width: 500px;
  }
`;

export const Box = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Img = styled.img`
  margin-bottom: 50px;
  width: 150px;

  @media ${device.mobileS} {
    width: 200px;
  }

  @media ${device.mobileM} {
    width: 280px;
  }

  @media ${device.tablet} {
    width: 600px;
  }

  @media ${device.laptop} {
    width: 600px;
  }
`;

export const BoxTitleInforation = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 10px;
`;

export const TitleInforation = styled.h3`
  color: ${colors.white};
  font-size: ${fontSizes.xlarge}px;
  width: 170px;
`;

export const IconFeatures = styled.img`
  padding-right: 10px;
  width: 25px;
`;

export const TextIformation = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.small}px;
  line-height: 25px;
  margin-bottom: 35px;
  text-align: left;
  width: 180px;

  @media ${device.tablet} {
    margin-bottom: 20px;
  }
`;
