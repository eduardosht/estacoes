import { memo } from 'react';
import styled, { keyframes } from 'styled-components';

// Definindo a animação de subir e descer
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
`;

// Estilo do container do ícone com animação
const IconContainer = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  animation: ${bounceAnimation} 2s ease-in-out infinite;
  font-size: 1rem;
  left: 92px;
  top: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 5px;
  font-weight: bold;
`

const Bouncer = ({ icon }: any) => {
  return (
    <IconContainer>
      <Wrapper>
        {icon}
      </Wrapper>
    </IconContainer>
  );
};

export default memo(Bouncer);