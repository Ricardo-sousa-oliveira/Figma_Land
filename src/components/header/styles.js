import styled from 'styled-components';
import { device } from '../../tokens/screen';

export const Container = styled.div`
  background: #181818;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  font-family: 'Roboto', sans-serif;
`;

export const Title = styled.h1`
  margin-top: 60px;
  margin-bottom: 60px;
  color: white;
  text-align: center;
  font-size: 35px;
  width: 190px;

  @media ${device.mobileM} {
    width: 200px;
    font-size: 40px;
  }

  @media ${device.mobileM} {
    width: 350px;
  }

  @media ${device.tablet} {
    width: 500px;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 15px;
  width: 240px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 25px;

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
    flex-direction: row;
    align-items: baseline;
    margin-right: 20px;
  }
`;

export const BtnTryForFree = styled.a`
  background: #4452fe;
  color: white;
  padding: 10px 20px 10px 20px;
  margin-bottom: 15px;

  @media ${device.tablet} {
    margin-right: 20px;
  }
`;

export const BtnLearnMore = styled.a`
  color: white;
  border: 1px solid white;
  font-size: 15px;
  padding: 10px 20px 10px 20px;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 100px;
`;
