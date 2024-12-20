import { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Mapa from './components/Mapa';
import Menu from './components/Menu';
import { ModalType } from './components/shared/enum/ModalType';
import Modal from './components/Modal';

import Theme from "./theme/Theme";
import ThemeDark from "./theme/ThemeDark";

import { useTheme } from './store/themeStore';

import './App.css';
import Loader from './components/Loader';
import CountryInfo from './components/CountryInfo';

function App() {
  const { theme } = useTheme();
  const [modal, setModal] = useState<ModalType | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [country, setCountry] = useState<any>(null);

  useEffect(() => {
    // Verificar quando todos os elementos da página foram carregados
    window.addEventListener('load', () => setIsLoaded(true));
    return () => window.removeEventListener('load', () => setIsLoaded(true));
  }, []);

  const handleModalStatus = useCallback((flag: boolean, type: ModalType) => {
    if (flag) {
      setModal(type);
      return;
    }
    setModal(null);
  }, []);

  const handleSelectCountry = useCallback((data: any) => {
    setCountry(data);
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? ThemeDark : Theme}>
      {!isLoaded && <Loader onLoadComplete={() => setIsLoaded(true)} />}

      {isLoaded && (
        <>
          <Modal onClose={handleModalStatus} type={modal} />

          <Menu handleSearchModal={handleModalStatus} />
          <Mapa onSelectCountry={handleSelectCountry} country={country} />
        </>
      )}

      {country && (
        <CountryInfo
          handleModalStatus={handleModalStatus}
          countryData={{
            country: country?.country,
            hemisphere: country?.hemisphere,
            seasons: country?.seasons
          }}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
