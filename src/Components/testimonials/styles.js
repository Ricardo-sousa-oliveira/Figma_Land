import styled from 'styled-components';
import { device } from '../../tokens/screen';
import { colors, fontFamilies, fontSizes } from '../../tokens';

export const Container = styled.div`
  align-items: center;
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  font-family: ${fontFamilies.primary};
  gap: 50px;
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
  font-size: ${fontSizes.small}px;
  line-height: 25px;
  margin-bottom: 30px;
  margin-left: 20px;
  width: 200px;

  @media ${device.mobileS} {
    font-size: ${fontSizes.medium}px;
    margin-left: 25px;
  }

  @media ${device.tablet} {
    width: 300px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 2 2 200px;
  gap: 20px;

  @media ${device.tablet} {
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BoxComments = styled.div`
  border-radius: 10px;
  border: solid 1px white;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 250px;

  @media ${device.mobileS} {
    width: 300px;
  }

  @media ${device.tablet} {
    width: 400px;
  }
`;

export const Img = styled.img`
  margin: 0px 15px 0px 20px;
  width: 40px;
`;

export const TitleProfile = styled.h3`
  color: ${colors.white};
  font-size: ${fontSizes.xlarge};
`;

export const BoxProfile = styled.div`
  align-items: center;
  display: flex;
  margin-top: 30px;
`;
