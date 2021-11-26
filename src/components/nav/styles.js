import styled from 'styled-components';
import { device } from '../../tokens/screen';

export const LogoImage = styled.img`
  width: 135px;
  height: 50px;
  margin-left: 10px;
  margin-top: 10px;
`;

export const Container = styled.div`
  background: #181818;
`;

export const BoxNav = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.mobileL} {
    display: flex;
    justify-content: space-around;
  }
`;

export const BoxLogo = styled.div`
  display: flex;
`;

export const BoxBtn = styled.div`
  display: flex;
  margin-left: 60px;
  margin-top: 15px;
  margin-right: 25px;
`;

export const BtnNav = styled.button`
  background: #181818;
  color: white;
  width: 90px;
  height: 35px;
  border: 1px solid white;
`;
