import { useCallback, memo } from 'react';
import { useTheme } from '../../../store/themeStore';

import * as S from './styles';
import Toggle from '../../Toggle';

const ModalConfigApp = () => {
  const { setTheme } = useTheme();

  const toggleTheme = useCallback((flag: boolean) => {
    setTheme(!flag ? 'light' : 'dark');
  }, [setTheme]);

  return (
    <>
      <S.SectionTitle style={{ marginTop: 0 }}>Configurações</S.SectionTitle>
      <S.Text>
        Configurações da aplicação
      </S.Text>

      <S.Box>
        <S.SectionSubTitle>Alterar tema da aplicação.</S.SectionSubTitle>
        <Toggle handleAction={toggleTheme} />
      </S.Box>
    </>

  );
};

export default memo(ModalConfigApp);
