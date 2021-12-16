import styled from 'styled-components';
import { device } from '../../tokens/screen';
import { colors, fontFamilies, fontSizes } from '../../tokens';

export const Container = styled.div`
  align-items: center;
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  font-family: ${fontFamilies.primary};
  gap: 20px;
  justify-content: center;
`;

export const Title = styled.h2`
  color: ${colors.white};
  font-size: ${fontSizes.xxlarge}px;
  margin-top: 150px;
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
  font-size: ${fontSizes.medium};
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
    margin-bottom: 60px;
    width: 500px;
  }
`;

export const Img = styled.img`
  width: 50px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const BoxLogo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const Btn = styled.a`
  background: ${colors.black};
  border: 1px solid ${colors.white};
  color: ${colors.white};
  padding: 10px 20px 10px 20px;
`;
