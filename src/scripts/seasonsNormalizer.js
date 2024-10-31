const fs = require('fs');
const geojsonData = require('../data/countries.json');

const seasonsByHemisphere = {
  Norte: {
    summer: { start: { day: 21, month: 6 }, end: { day: 22, month: 9 } },
    autumn: { start: { day: 23, month: 9 }, end: { day: 20, month: 12 } },
    winter: { start: { day: 21, month: 12 }, end: { day: 20, month: 3 } },
    spring: { start: { day: 21, month: 3 }, end: { day: 20, month: 6 } }
  },
  Sul: {
    summer: { start: { day: 21, month: 12 }, end: { day: 20, month: 3 } },
    autumn: { start: { day: 21, month: 3 }, end: { day: 20, month: 6 } },
    winter: { start: { day: 21, month: 6 }, end: { day: 22, month: 9 } },
    spring: { start: { day: 23, month: 9 }, end: { day: 20, month: 12 } }
  }
};

// Função para calcular a média de latitudes de um país (para definir o hemisfério)
const getAverageLatitude = (coordinates) => {
  const flattenCoords = coordinates.flat(Infinity);
  const latitudes = flattenCoords.filter((_, index) => index % 2 !== 0); // Extrai apenas as latitudes (y)
  const sumLatitudes = latitudes.reduce((sum, lat) => sum + lat, 0);
  return sumLatitudes / latitudes.length;
};

// Processar dados GeoJSON para determinar hemisfério e aplicar as estações
const generateCountrySeasonsJSON = (geojsonData) => {
  return geojsonData.features.map((feature) => {
    const countryName = feature.properties.ADMIN;
    const coordinates = feature.geometry.coordinates;
    const avgLatitude = getAverageLatitude(coordinates);

    const hemisphere = avgLatitude >= 0 ? 'Norte' : 'Sul';
    const seasons = seasonsByHemisphere[hemisphere];

    return {
      country: countryName,
      hemisphere: hemisphere,
      seasons: seasons
    };
  });
};

// Executar a função e salvar o JSON resultante
const countrySeasons = generateCountrySeasonsJSON(geojsonData);
fs.writeFileSync('country_seasons.json', JSON.stringify(countrySeasons, null, 2));
console.log('Arquivo country_seasons.json gerado com sucesso!');