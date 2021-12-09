import styled from 'styled-components';
import { device } from '../../tokens/screen';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  align-items: center;
  background: #181818;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
`;

export const Title = styled.h2`
  color: white;
  font-size: 35px;
  margin-bottom: 20px;
  margin-top: 200px;
  text-align: center;

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
  line-height: 25px;
  margin-bottom: 30px;
  text-align: center;
  width: 240px;

  @media ${device.mobileS} {
    width: 200px;
  }

  @media ${device.mobileM} {
    width: 300px;
  }

  @media ${device.tablet} {
    margin-bottom: 60px;
    width: 500px;
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
  align-items: center;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 240px;

  @media ${device.mobileS} {
    height: 500px;
    width: 300px;
  }

  @media ${device.tablet} {
    height: 500px;
    width: 350px;
  }
`;

export const TitleCard = styled.h3`
  font-size: 20px;
  margin-top: 40px;
  text-align: center;
`;

export const TextCard = styled.h3`
  font-size: 16px;
  line-height: 25px;
  margin: 40px 0px;
  text-align: center;
  width: 200px;
`;

export const BtnCard = styled.a`
  background: #4452fe;
  color: white;
  margin-bottom: 10px;
  padding: 10px 20px 10px 20px;
`;

export const ImgCard = styled.img`
  width: 200px;

  @media ${device.mobileS} {
    width: 240px;
  }
`;
