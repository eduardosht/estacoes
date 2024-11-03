// Mapa.tsx (componente principal)
import React, { useCallback, useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap, Marker } from 'react-leaflet';
import COUNSTRIES_DATA from '../../data/countries.json'
import COUNSTRIES_SEASON_DATA from '../../scripts/country_seasons.json';

import 'leaflet/dist/leaflet.css';
import CountryInfo from '../CountryInfo';
import { useCountryStore } from '../../store/countryStore';
import L, { Icon, LatLngExpression, PointExpression } from 'leaflet';

/**
 * Biblioteca turf foi necessária pois países como Rússia, o leaflet não consegue buscar o centro do país
 * para adicionar um marcador. Calcula um ponto central ponderado da área geográfica do país.
 */
import * as turf from '@turf/turf';

import MarkerIconPng from '../../asset/marker-icon.png'
import { useTheme } from '../../store/themeStore';

const markerIcon = new Icon({
  iconUrl: MarkerIconPng,
  iconSize: {
    x: 40,
    y: 40,
  } as PointExpression,
});

type CountryFeature = {
  type: 'Feature';
  properties: {
    ADMIN: string; // Nome do país
  };
  geometry: any;
};

// URLs dos estilos claro e escuro do Mapbox
const lightStyle = {
  url: 'https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png',
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>'
};
const darkStyle = {
  url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
  attribution: 'Free license</a>'
};


// Hook para ajustar o zoom com base no país selecionado
const CountrySelectedComponent: React.FC<{ selectedCountry: CountryFeature | null }> = ({ selectedCountry }) => {
  const map = useMap();
  const [center, setCenter] = useState<LatLngExpression | null>(null);

  useEffect(() => {
    if (selectedCountry) {
      // const bounds = getCountryBounds(selectedCountry);
      const center = turf.centroid(selectedCountry).geometry.coordinates;
      const bounds = L.geoJSON(selectedCountry).getBounds();
      setCenter([center[1], center[0]] as LatLngExpression);
      map.fitBounds(bounds);
    }
  }, [selectedCountry, map]);

  useEffect(() => {
    const final: any[] = [];
    (COUNSTRIES_DATA as any).features.map((c: any) => {
      const center = turf.centroid(c).geometry.coordinates;
      final.push({
        country: c.properties.ADMIN,
        lat: center[1],
        long: center[0],
      })
    })
  }, []);

  return center ? <Marker position={center} icon={markerIcon} /> : null;
};

interface IMapa {
  onSelectCountry: (country: any) => void;
  country: any,
}
const Mapa: React.FC<IMapa> = ({ onSelectCountry, country }) => {
  const { theme } = useTheme();
  const { selectedCountry, setSelectedCountry } = useCountryStore();
  const [countryData, setCountryData] = useState<CountryFeature[]>([]);

  useEffect(() => {
    setCountryData((COUNSTRIES_DATA as any).features);
  }, []);

  const countryStyle = (countryName: string) => ({
    fillColor: country?.country === countryName ? '#ff7800' : '#3388ff',
    weight: 1,
    opacity: 1,
    color: 'white',
    fillOpacity: 0.6,
  });

  const onCountryClick = useCallback((countryName: string) => {
    const dataCordinates = (COUNSTRIES_DATA as any).features.find((country: any) => country.properties.ADMIN === countryName) || null;
    const dataSeasons = COUNSTRIES_SEASON_DATA.find((country) => country.country === countryName) || null;

    const factoryCurrentCountry = {
      ...dataSeasons,
      ...dataCordinates
    }

    setSelectedCountry(dataSeasons!.country)
    onSelectCountry(factoryCurrentCountry)
  }, [onSelectCountry, setSelectedCountry]);

  useEffect(() => {
    if (!selectedCountry) return
    onCountryClick(selectedCountry);
  }, [onCountryClick, selectedCountry]);

  return (
    <>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        minZoom={2}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url={theme === 'dark' ? darkStyle.url : lightStyle.url}
          attribution={theme === 'dark' ? darkStyle.attribution : lightStyle.attribution}
        />

        {countryData.map((country, idx) => (
          <GeoJSON
            key={idx}
            data={country}
            style={() => countryStyle(country.properties.ADMIN)}
            eventHandlers={{
              click: () => onCountryClick(country.properties.ADMIN),
            }}
          />
        ))}

        {/* Hook para ajustar o zoom e adicionar um marcador quando um país é selecionado */}
        <CountrySelectedComponent selectedCountry={country} />
      </MapContainer>
    </>
  );
};

export default Mapa;
