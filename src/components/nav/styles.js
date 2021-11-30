import styled from 'styled-components';
import { device } from '../../tokens/screen';

export const LogoImage = styled.img`
  height: 50px;
  margin-left: 10px;
  margin-top: 10px;
  width: 135px;
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
  margin-right: 25px;
  margin-top: 15px;
`;

export const BtnNav = styled.button`
  background: #181818;
  border: 1px solid white;
  color: white;
  height: 35px;
  width: 90px;
`;
