import { WiThermometer, WiRaindrop, WiStrongWind, WiBarometer } from 'react-icons/wi';
import { useCountryStore } from '../../../store/countryStore';

import CountriesWeather from '../../../data/countries-weather.json';

import * as S from './styles';
import { getMonth } from 'date-fns';
import { memo, useState } from 'react';

const Weather = () => {
  const { selectedCountry } = useCountryStore();

  const selectedCountryWeather =
    !selectedCountry
      ? { name: '', data: null }
      : CountriesWeather.filter(country => country.name === selectedCountry)[0];

  console.log('selectedCountryWeatherselectedCountryWeather ', selectedCountryWeather)
  const { name, data: climateData } = selectedCountryWeather;

  // Função para obter o mês atual e definir como padrão
  const currentMonthIndex = getMonth(new Date());
  const [selectedMonth, setSelectedMonth] = useState(currentMonthIndex);

  // Função para lidar com a mudança do mês
  const handleMonthChange = (event: any) => {
    setSelectedMonth(Number(event.target.value));
  };

  // Dados climáticos do mês selecionado
  const selectedMonthData = climateData?.data[selectedMonth];

  // Map para exibir os meses pelo nome
  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  return (
    <S.ClimateDataWrapper>
      <S.Title>Clima em {name}</S.Title>
      <S.Description>
        Dados coletados para o ano de 2023. Devido às mudanças climáticas, as condições climáticas podem não se replicar exatamente no futuro.
        O clima apresentado serve apenas como uma base para entender as condições médias, mas pode variar dependendo da localização dentro do país.
      </S.Description>

      <S.SelectMonth value={selectedMonth} onChange={handleMonthChange}>
        {monthNames.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </S.SelectMonth>

      <S.DataSection>
        <S.DataItem>
          <S.HeaderData>
            <S.IconWrapper><WiThermometer /></S.IconWrapper>
            <S.SubTitle>Temperatura Média</S.SubTitle>
          </S.HeaderData>
          <S.DataValue>{selectedMonthData?.tavg ? `${selectedMonthData?.tavg} °C` : '-'}</S.DataValue>
        </S.DataItem>

        <S.DataItem>
          <S.HeaderData>
            <S.IconWrapper><WiThermometer /></S.IconWrapper>
            <S.SubTitle>Temperatura Mínima Média</S.SubTitle>
          </S.HeaderData>
          <S.DataValue>{selectedMonthData?.tmin ? selectedMonthData?.tmin : '-'}</S.DataValue>
        </S.DataItem>

        <S.DataItem>
          <S.HeaderData>
            <S.IconWrapper><WiThermometer /></S.IconWrapper>
            <S.SubTitle>Temperatura Máxima Média</S.SubTitle>
          </S.HeaderData>
          <S.DataValue>{selectedMonthData?.tmax ? `${selectedMonthData?.tmax} °C` : '-'}</S.DataValue>
        </S.DataItem>

        <S.DataItem>
          <S.HeaderData>
            <S.IconWrapper><WiRaindrop /></S.IconWrapper>
            <S.SubTitle>Precipitação Mensal</S.SubTitle>
          </S.HeaderData>
          <S.DataValue>{selectedMonthData?.prcp ? `${selectedMonthData?.prcp} mm` : '-'}</S.DataValue>
        </S.DataItem>

        <S.DataItem>
          <S.HeaderData>
            <S.IconWrapper><WiStrongWind /></S.IconWrapper>
            <S.SubTitle>Velocidade Média do Vento</S.SubTitle>
          </S.HeaderData>
          <S.DataValue>{selectedMonthData?.wspd ? `${selectedMonthData?.wspd} km/h` : '-'}</S.DataValue>
        </S.DataItem>

        <S.DataItem>
          <S.HeaderData>
            <S.IconWrapper><WiBarometer /></S.IconWrapper>
            <S.SubTitle>Pressão Média</S.SubTitle>
          </S.HeaderData>
          <S.DataValue>{selectedMonthData?.pres ? `${selectedMonthData?.pres} hPa` : '-'}</S.DataValue>
        </S.DataItem>
      </S.DataSection>
    </S.ClimateDataWrapper>
  );
};

export default memo(Weather);