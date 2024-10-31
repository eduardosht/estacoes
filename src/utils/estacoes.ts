import { format, parseISO } from 'date-fns';

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