// CountryInfo.tsx
import React, { useCallback, useState } from 'react';
import { FaUpLong, FaDownLong } from "react-icons/fa6";

import SeasonCarousel from '../SeasonsCarousel';
import { Seasons } from '../../models/SeasonModel';

import * as S from './styles';


type CountryInfoProps = {
  countryData: {
    country: string;
    hemisphere: string;
    seasons: Seasons;
  };
};

const CountryInfo: React.FC<CountryInfoProps> = ({ countryData }) => {
  const [showContent, setShowContent] = useState(false);

  const { country, hemisphere, seasons } = countryData;

  const handleShowContent = useCallback(() => {
    setShowContent((prev: boolean) => !prev);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevê o scroll quando `Space` é pressionado
      handleShowContent();
    }
  };

  return (
    <S.CountryInfoContainer $isVisible={showContent}>
      <S.UpIcon role="button" tabIndex={0} onClick={handleShowContent} onKeyDown={handleKeyDown}>
        {showContent ? <FaDownLong /> : <FaUpLong />}
      </S.UpIcon>
      <S.CountryTitle>{country}</S.CountryTitle>
      <S.HemisphereInfo>Hemisfério: {hemisphere}</S.HemisphereInfo>

      <SeasonCarousel seasons={seasons} />
    </S.CountryInfoContainer>
  );
};

export default CountryInfo;
