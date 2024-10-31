import { create } from 'zustand';

interface CountryState {
  selectedCountry: string | null;
  setSelectedCountry: (country: string) => void;
}

export const useCountryStore = create<CountryState>((set) => ({
  selectedCountry: null,
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));