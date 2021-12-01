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
  gap: 20px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 35px;
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
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
`;

export const Btn = styled.a`
  background: #181818;
  border: 1px solid white;
  color: white;
  padding: 10px 20px 10px 20px;
`;
