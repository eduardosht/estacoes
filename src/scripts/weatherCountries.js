import fetch from 'node-fetch';
import { promises as fs } from 'fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const countries = require('./countries-location.json');

const apiUrl = 'https://meteostat.p.rapidapi.com/point/monthly';
const apiKey = '';

const successfulRequests = [];
const failedRequests = [];
const results = [];

// Função para adicionar um delay entre requests
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchData(country) {
  const { country: countryName, lat, long } = country;
  const url = `${apiUrl}?lat=${lat}&lon=${long}&start=2023-01-01&end=2023-12-31`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'meteostat.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    });

    if (!response.ok) throw new Error(`Error ${response.status}`);

    const data = await response.json();
    results.push({ name: countryName, data });
    successfulRequests.push(countryName);
  } catch (error) {
    console.error(`Request failed for ${countryName}:`, error.message);
    failedRequests.push(countryName);
  }
}

async function processCountries() {
  const totalCountries = countries.length;

  for (let i = 0; i < totalCountries; i += 5) {
    const batch = countries.slice(i, i + 5);

    // Executa cada request do lote com um delay de 500ms entre elas
    for (const country of batch) {
      await fetchData(country);
      await delay(500); // Pausa de 500ms entre cada request no lote
    }

    console.log(`Remaining countries: ${totalCountries - (i + 5)}`);
    await delay(3000); // Pausa de 3 segundos entre os lotes de 5 requests
  }

  await saveResults();
}

async function saveResults() {
  try {
    await fs.writeFile('data.json', JSON.stringify(results, null, 2));
    console.log('Data saved to data.json');

    const requestInfo = {
      deuBom: successfulRequests,
      deuRuim: failedRequests
    };
    await fs.writeFile('request-info.json', JSON.stringify(requestInfo, null, 2));
    console.log('Request info saved to request-info.json');
  } catch (error) {
    console.error('Error saving files:', error.message);
  }
}

processCountries();
