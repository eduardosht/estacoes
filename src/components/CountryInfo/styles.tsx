import styled from 'styled-components';

export const CountryInfoContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: ${props => props.$isVisible ? "0px" : "-200px"};
  width: 100%;
  background-color: ${(props) => props.theme?.color.background};
  border-top: 2px solid ${(props) => props.theme?.color.primary};
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px 20px 40px 20px;
  z-index: 1000;
  transition: 300ms ease-in-out;
  opacity: 0.95;
`;

export const CountryTitle = styled.h2`
  margin-top: 0;
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.theme?.color.primary};
`;

export const HemisphereInfo = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme?.color.secundary};
  text-align: center;
  margin-top: -10px;
  
`;

export const UpIcon = styled.div`
  text-align: center;
  margin-top: -45px;
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.theme?.color.primary};
  border: 1px solid ${(props) => props.theme?.color.background};
  border-radius: 50px;
  display: flex;
  align-items: center;
  color: #ffffff;
  justify-content: center;
  cursor: pointer;
`
