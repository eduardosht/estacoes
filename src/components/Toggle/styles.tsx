import styled from 'styled-components';
import ImageLight from '../../asset/light.png'
import ImageDark from '../../asset/dark.png'

export const ToggleContainer = styled.div<{ active: boolean }>`
  width: 120px;
  height: 40px;
  border-radius: 35px;
  background-image: url(${({ active }) => (active ? ImageDark : ImageLight)});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding: 5px 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ToggleCircle = styled.div<{ active: boolean }>`
  width: 45px;
  height: 44px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#e9e9e9' : '#ffdf50')};
  transition: transform 0.3s ease;
  transform: ${({ active }) => (active ? 'translateX(75px)' : 'translateX(0)')};
  box-shadow: 1px 1px 5px 1px #00000096;
`;