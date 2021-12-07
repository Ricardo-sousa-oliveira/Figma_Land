import styled from 'styled-components';
import { device } from '../../tokens/screen';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  align-items: center;
  background: #181818;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  gap: 50px;
  justify-content: center;
  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const BoxExperience = styled.div`
  margin-top: 150px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${device.tablet} {
    border-radius: 30px;
    background: #343434;
    flex-direction: row;
    width: 800px;
    align-items: center;
    overflow: hidden;
    padding-top: 30px;
  }
`;

export const Box = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    align-items: baseline;
    padding-left: 30px;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 35px;
  text-align: center;
  width: 280px;

  @media ${device.mobileM} {
    width: 180px;
  }

  @media ${device.mobileM} {
    width: 250px;
  }

  @media ${device.tablet} {
    width: 400px;
  }
`;

export const Btn = styled.a`
  background: #4452fe;
  color: white;
  padding: 10px 30px 10px 30px;
`;

export const Img = styled.img`
  width: 200px;

  @media ${device.mobileS} {
    width: 300px;
  }

  @media ${device.mobileM} {
    width: 450px;
  }

  @media ${device.mobileM} {
    width: 200px;
  }

  @media ${device.mobileM} {
    width: 300px;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;
