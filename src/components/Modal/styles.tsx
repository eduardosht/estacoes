import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6); /* Fundo preto com opacidade */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div<{ isDark: boolean }>`
  background: ${(props) => props.theme?.color.background};
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0.95;
  border: 1px solid ${(props) => props.theme?.color.primary};
`;

export const CloseIcon = styled(FaTimes)`
  position: relative;
  cursor: pointer;
  margin-left: auto;
  display: block;
  margin-bottom: 0px;
  color: ${(props) => props.theme?.color.primary};
`;