import { isWithinInterval, parse, getMonth, getDate } from 'date-fns';
import { Seasons } from '../models/SeasonModel';

export const determinarEstacao = (mes: number, hemisferio: 'norte' | 'sul') => {
  // Logica simplificada para determinar a estação
  if (hemisferio === 'norte') {
    if (mes >= 3 && mes <= 5) return 'Primavera';
    if (mes >= 6 && mes <= 8) return 'Verão';
    if (mes >= 9 && mes <= 11) return 'Outono';
    return 'Inverno';
  } else {
    if (mes >= 3 && mes <= 5) return 'Outono';
    if (mes >= 6 && mes <= 8) return 'Inverno';
    if (mes >= 9 && mes <= 11) return 'Primavera';
    return 'Verão';
  }
};

export function getCurrentSeason(seasons: Seasons): string {
  const now = new Date();
  const year = now.getFullYear();

  for (const [season, { start, end }] of Object.entries(seasons)) {
    const startDate = parse(`${start.day}-${start.month}-${year}`, 'd-M-yyyy', new Date());
    let endDate = parse(`${end.day}-${end.month}-${year}`, 'd-M-yyyy', new Date());

    // Verifica se o fim do inverno cai no próximo ano
    if (season === 'winter' && end.month === 3) {
      endDate = parse(`${end.day}-${end.month}-${year + 1}`, 'd-M-yyyy', new Date());
    }

    // Verifica se a data atual está no intervalo da estação
    if (isWithinInterval(now, { start: startDate, end: endDate })) {
      return season;
    }
  }

  return 'Estação desconhecida';
}