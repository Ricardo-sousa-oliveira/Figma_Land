import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  width: 180px;
  text-align: center;
  font-size: 35px;
`;

export const Text = styled.p`
  color: white;
  font-size: 15px;
  width: 240px;
  text-align: center;
  margin-bottom: 30px;
`;

export const BoxBtn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const BtnTryForFree = styled.a`
  background: #4452fe;
  color: white;
  padding: 10px 20px 10px 20px;
  margin-bottom: 15px;
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
`;
