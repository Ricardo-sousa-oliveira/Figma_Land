import styled from 'styled-components';
import { device } from '../../tokens/screen';

export const Container = styled.div`
  background: #181818;
  display: flex;
  flex-direction: column;
  align-items: center;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  font-family: 'Roboto', sans-serif;
`;

export const Title = styled.h2`
  color: white;
  font-size: 35px;
  text-align: center;
  margin-top: 200px;
  margin-bottom: 20px;

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
  color: white;
  font-size: 16px;
  text-align: center;
  width: 240px;
  margin-bottom: 30px;
  line-height: 25px;

  @media ${device.mobileS} {
    width: 200px;
  }

  @media ${device.mobileM} {
    width: 300px;
  }

  @media ${device.tablet} {
    width: 500px;
    margin-bottom: 60px;
  }
`;

export const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 240px;
  height: 400px;
  border-radius: 10px;

  @media ${device.mobileS} {
    width: 300px;
    height: 500px;
  }

  @media ${device.tablet} {
    width: 350px;
    height: 500px;
  }
`;

export const TitleCard = styled.h3`
  font-size: 20px;
  text-align: center;
  margin-top: 40px;
`;

export const TextCard = styled.h3`
  font-size: 16px;
  text-align: center;
  margin: 40px 0px;
  width: 200px;
  line-height: 25px;
`;

export const BtnCard = styled.a`
  background: #4452fe;
  color: white;
  padding: 10px 20px 10px 20px;
  margin-bottom: 10px;
`;

export const ImgCard = styled.img`
  width: 200px;

  @media ${device.mobileS} {
    width: 240px;
  }
`;
