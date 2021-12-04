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
  font-size: 13px;
  line-height: 25px;
  margin-bottom: 30px;
  margin-left: 20px;
  width: 200px;
  @media ${device.mobileS} {
    margin-left: 25px;
    font-size: 16px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 400px;
  flex-direction: column;
  gap: 20px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const BoxComments = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px white;
  border-radius: 10px;
  width: 250px;
  gap: 30px;
  @media ${device.mobileS} {
    width: 300px;
  }
`;

export const Img = styled.img`
  width: 40px;
  margin: 0px 15px 0px 20px;
`;

export const BoxProfile = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
