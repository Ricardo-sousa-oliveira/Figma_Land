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

export const Title = styled.h1`
  color: white;
  font-size: ${fontSizes.xxlarge}px;
  margin-bottom: 60px;
  margin-top: 60px;
  text-align: center;
  width: 190px;

  @media ${device.mobileM} {
    font-size: ${fontSizes.xxxlarge}px;
    width: 200px;
  }

  @media ${device.mobileM} {
    width: 350px;
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
  width: 240px;

  @media ${device.mobileS} {
    width: 200px;
  }

  @media ${device.mobileM} {
    width: 350px;
  }

  @media ${device.tablet} {
    width: 500px;
  }
`;

export const BoxBtn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${device.tablet} {
    align-items: baseline;
    flex-direction: row;
    margin-right: 20px;
  }
`;

export const BtnTryForFree = styled.a`
  background: ${colors.primary};
  color: ${colors.white};
  margin-bottom: 15px;
  padding: 10px 20px 10px 20px;

  @media ${device.tablet} {
    margin-right: 20px;
  }
`;

export const BtnLearnMore = styled.a`
  border: 1px solid white;
  color: ${colors.white};
  font-size: ${fontSizes.medium}px;
  margin-bottom: 40px;
  padding: 10px 20px 10px 20px;
`;

export const Img = styled.img`
  margin-bottom: 100px;
  width: 100%;
`;
