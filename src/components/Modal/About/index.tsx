import { memo } from 'react';
import { FaReact, FaNodeJs, FaBrain, FaGlobe, FaNode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiLeaflet, SiVite } from 'react-icons/si';

import * as S from './styles';

const ModalAbout = () => {
  return (
    <>
      <S.Wrapper>
        <S.SectionTitle style={{ marginTop: 0 }}>Sobre o "Estações do Mundo"</S.SectionTitle>
        <S.Text>
          Esta aplicação oferece uma maneira prática e visual de explorar as estações do ano em cada país. Ao selecionar
          um país, o usuário pode descobrir a estação correspondente e ver essa informação mapeada em um mapa interativo,
          facilitando a compreensão climática global.
        </S.Text>

        <S.SectionTitle>Stack e Bibliotecas Utilizadas</S.SectionTitle>
        <S.StackList>
          <S.StackItem>
            <FaReact /> React
          </S.StackItem>
          <S.StackItem>
            <SiTypescript /> TypeScript
          </S.StackItem>
          <S.StackItem>
            <SiTailwindcss /> Tailwind CSS
          </S.StackItem>
          <S.StackItem>
            <SiLeaflet /> Leaflet
          </S.StackItem>
          <S.StackItem>
            <SiVite /> Vite
          </S.StackItem>
          <S.StackItem>
            <FaNodeJs /> Node.js
          </S.StackItem>
          <S.StackItem>
            <FaBrain /> ChatGPT
          </S.StackItem>
          <S.StackItem>
            <FaNode /> Node.js
          </S.StackItem>
          <S.StackItem>
            <FaGlobe /> GeoJSON
          </S.StackItem>
        </S.StackList>
      </S.Wrapper>
    </>
  );
};

export default memo(ModalAbout);
