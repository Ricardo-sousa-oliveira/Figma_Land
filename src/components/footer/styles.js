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
  color: white;
`;

export const Title = styled.h3`
  color: white;
  font-size: 20px;
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
  color: white;
`;

export const Img = styled.img`
  width: 30px;
`;
