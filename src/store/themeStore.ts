import { create } from 'zustand';

type ITheme = 'dark' | 'light';

interface CountryState {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

export const useTheme = create<CountryState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}));