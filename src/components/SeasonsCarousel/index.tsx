import { useMemo } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight, FaRegHandPointLeft } from 'react-icons/fa';

import SummerImage from '../../asset/summer.jpg'
import WinterImage from '../../asset/winter.jpg'
import SpringImage from '../../asset/spring.jpg'
import AutumnImage from '../../asset/autumn.jpg'

import { Season, Seasons } from '../../models/SeasonModel';

import * as S from './styles';
import { getCurrentSeason } from '../../utils/estacoes';
import Bouncer from '../Bouncer';

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

interface ISeasonCarousel {
  seasons: Seasons
}

const SeasonCarousel = ({ seasons }: ISeasonCarousel) => {
  const currentSeason = useMemo(() => getCurrentSeason(seasons), [seasons]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Exibir 4 itens no desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900, // Menor que 900px
        settings: {
          slidesToShow: 3, // Exibir 3 itens
        },
      },
      {
        breakpoint: 650, // Menor que 650px
        settings: {
          slidesToShow: 2, // Exibir 2 itens
        },
      },
      {
        breakpoint: 420, // Menor que 420px (mobile)
        settings: {
          slidesToShow: 1, // Exibir 1 item
        },
      },
    ],
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
  };

  const seasonData = useMemo(() => [
    {
      image: SummerImage,
      title: "Verão",
      key: "summer",
      date: seasons.summer,
    },
    {
      image: AutumnImage,
      title: "Outono",
      key: "autumn",
      date: seasons.autumn,
    },
    {
      image: WinterImage,
      title: "Inverno",
      key: "winter",
      date: seasons.winter,
    },
    {
      image: SpringImage,
      title: "Primavera",
      key: "spring",
      date: seasons.spring,
    },
  ], [seasons]);

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {seasonData.map((season, index) => (
          <S.SeasonBox key={index} className="season-slide">
            <S.FeaturedImage>
              {currentSeason === season.key && <Bouncer icon={<FaRegHandPointLeft />} />}
              <img src={season.image} alt={season.title} title={season.title} />
              <S.SeasonTitle>{season.title}</S.SeasonTitle>
            </S.FeaturedImage>
            <S.SeasonDates>{formatSeasonDates(season.date)}</S.SeasonDates>
          </S.SeasonBox>
        ))}
      </Slider>
    </div>
  );
};

export default SeasonCarousel;