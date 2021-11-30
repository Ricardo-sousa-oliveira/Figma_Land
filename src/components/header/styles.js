import styled from 'styled-components';
import { device } from '../../tokens/screen';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  align-items: center;
  background: #181818;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  font-size: 35px;
  margin-bottom: 60px;
  margin-top: 60px;
  text-align: center;
  width: 190px;
  @media ${device.mobileM} {
    font-size: 40px;
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
  background: #4452fe;
  color: white;
  margin-bottom: 15px;
  padding: 10px 20px 10px 20px;
  @media ${device.tablet} {
    margin-right: 20px;
  }
`;

export const BtnLearnMore = styled.a`
  border: 1px solid white;
  color: white;
  font-size: 15px;
  margin-bottom: 40px;
  padding: 10px 20px 10px 20px;
`;

export const Img = styled.img`
  margin-bottom: 100px;
  width: 100%;
`;
