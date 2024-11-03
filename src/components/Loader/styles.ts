import styled, { css, keyframes } from 'styled-components';

// Animação de fade-out
export const fadeOutAnimate = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Container principal do Loader
export const LoaderContainer = styled.div<{ fadeOut: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme?.color.primary};
  color: #fff;
  font-size: 24px;
  z-index: 1000;
  transition: opacity 1s ease;

  ${({ fadeOut }) =>
    fadeOut &&
    css`
      animation: ${fadeOutAnimate} 1s forwards;
    `}
`;

// Barra de progresso do Loader
export const Progress = styled.div`
  width: 50%;
  height: 20px;
  background-color: #444;
  border-radius: 20px;
  margin-top: 20px;
  overflow: hidden;
`;

// Barra interna do progresso, indicando a porcentagem
export const ProgressBar = styled.div<{ width: number }>`
  height: 100%;
  background-color: #7073ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: ${({ width }) => width}%;
  transition: width 0.3s;
`;

export const Title = styled.div`
  font-size: 2rem;
`;
