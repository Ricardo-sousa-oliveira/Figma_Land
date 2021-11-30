import styled from 'styled-components';
import { device } from '../../tokens/screen';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  align-items: center;
  background: #181818;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  gap: 20px;
  justify-content: center;
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

export const Boximg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 180px;
`;

export const Btn = styled.a`
  background: #181818;
  border: 1px solid white;
  color: white;
  padding: 10px 20px 10px 20px;
`;
