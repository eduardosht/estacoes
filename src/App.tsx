import { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Mapa from './components/Mapa';
import Menu from './components/Menu';
import { ModalType } from './components/shared/enum/ModalType';
import Modal from './components/Modal';

import Theme from "./theme/Theme";
import ThemeDark from "./theme/ThemeDark";

import { useTheme } from './store/themeStore';

import './App.css';

function App() {
  const { theme } = useTheme();
  const [modal, setModal] = useState<ModalType | null>(null);

  const handleModalStatus = useCallback((flag: boolean, type: ModalType) => {
    if (flag) {
      setModal(type);
      return;
    }
    setModal(null);
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? ThemeDark : Theme}>
      <Modal onClose={handleModalStatus} type={modal} />

      <Menu handleSearchModal={handleModalStatus} />
      <Mapa />
    </ThemeProvider>
  );
}

export default App;
