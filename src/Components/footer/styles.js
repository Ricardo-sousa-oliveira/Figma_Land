import styled from 'styled-components';
import { device } from '../../tokens/screen';
import { colors, fontFamilies, fontSizes } from '../../tokens';

export const Container = styled.div`
  align-items: center;
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  font-family: ${fontFamilies.primary};
`;

export const BoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 150px;
  width: 230px;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 70px;
    justify-content: center;
  }
`;

export const BoxLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Link = styled.a`
  color: ${colors.white};
`;

export const Title = styled.h3`
  color: ${colors.white};
  font-size: ${fontSizes.xlarge}px;
`;

export const BoxInformation = styled.div`
  align-items: center;
  display: flex;
  gap: 5px;
  width: 280px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const BoxSocial = styled.div`
  align-items: center;
  display: flex;
  gap: 15px;
`;

export const Text = styled.p`
  color: ${colors.white};
`;

export const Img = styled.img`
  width: 30px;
`;
