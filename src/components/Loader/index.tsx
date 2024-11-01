import React, { useEffect, useState } from 'react';

import * as S from './styles';

interface LoaderProps {
  onLoadComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 30);

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => setIsFadeOut(true), 500);
      setTimeout(onLoadComplete, 1000);
    }

    return () => clearInterval(interval);
  }, [progress, onLoadComplete]);

  return (
    <S.LoaderContainer fadeOut={isFadeOut}>
      <S.Title>Carregando...</S.Title>
      <S.Progress >
        <S.ProgressBar width={progress}> {progress} % </S.ProgressBar>
      </S.Progress>
    </S.LoaderContainer>
  );
};

export default Loader;
