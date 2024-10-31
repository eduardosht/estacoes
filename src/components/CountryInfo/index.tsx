// CountryInfo.tsx
import React, { useCallback, useState } from 'react';
import SummerImage from '../../asset/summer.jpg'
import WinterImage from '../../asset/winter.jpg'
import SpringImage from '../../asset/spring.jpg'
import AutumnImage from '../../asset/autumn.jpg'

import { FaUpLong, FaDownLong } from "react-icons/fa6";

import * as S from './styles';

type Season = {
  start: { day: number; month: number };
  end: { day: number; month: number };
};

type Seasons = {
  summer: Season;
  autumn: Season;
  winter: Season;
  spring: Season;
};

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

  // Função para formatar as datas de início e término
  const formatSeasonDates = (season: Season) => {
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const startMonthName = monthNames[season.start.month - 1];
    const endMonthName = monthNames[season.end.month - 1];

    return (
      <div>
        <S.Paragraph><strong>Início: </strong> {String(season.start.day).padStart(2, '0')} / {startMonthName}</S.Paragraph>
        <S.Paragraph><strong>Término: </strong> {String(season.end.day).padStart(2, '0')} / {endMonthName}</S.Paragraph>
      </div>
    );
  };

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

      <S.SeasonsContainer>
        <S.SeasonBox>
          <S.FeaturedImage>
            <img src={SummerImage} alt="Verão" title="Verão" />
            <S.SeasonTitle>Verão</S.SeasonTitle>
          </S.FeaturedImage>
          <S.SeasonDates>{formatSeasonDates(seasons.summer)}</S.SeasonDates>
        </S.SeasonBox>
        <S.SeasonBox>
          <S.FeaturedImage>
            <img src={AutumnImage} alt="Outono" title="Outono" />
            <S.SeasonTitle>Outono</S.SeasonTitle>
          </S.FeaturedImage>
          <S.SeasonDates>{formatSeasonDates(seasons.autumn)}</S.SeasonDates>
        </S.SeasonBox>
        <S.SeasonBox>
          <S.FeaturedImage>
            <img src={WinterImage} alt="Inverno" title="Inverno" />
            <S.SeasonTitle>Inverno</S.SeasonTitle>
          </S.FeaturedImage>
          <S.SeasonDates>{formatSeasonDates(seasons.winter)}</S.SeasonDates>
        </S.SeasonBox>
        <S.SeasonBox>
          <S.FeaturedImage>
            <img src={SpringImage} alt="Primavera" title="Primavera" />
            <S.SeasonTitle>Primavera</S.SeasonTitle>
          </S.FeaturedImage>
          <S.SeasonDates>{formatSeasonDates(seasons.spring)}</S.SeasonDates>
        </S.SeasonBox>
      </S.SeasonsContainer>
    </S.CountryInfoContainer>
  );
};

export default CountryInfo;
